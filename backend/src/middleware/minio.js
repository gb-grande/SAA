import * as minio from "minio";
import {MinioStorageEngine} from "@namatery/multer-minio";
import path from "path";
import multer from "multer";

function getFileName(){
    return new Date().toJSON().slice(0,19).replaceAll(/[-:]/g, '');
}

const bucket = "blog-images";
function getMinioUrl(filename = ''){
    return `http://${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}/${bucket}/${filename}`;
}

let client;
let storage;
try {
    client = new minio.Client({
        port: parseInt(process.env.MINIO_PORT),
        endPoint: process.env.MINIO_ENDPOINT,
        accessKey: process.env.MINIO_ACCESS_KEY,
        secretKey: process.env.MINIO_SECRET_KEY,
        useSSL: false //TODO this obviously shouldn't be false in production.
    });
    //Verifying connection
    await client.listBuckets();
    console.log(`Connected to minio at ${getMinioUrl()}`);

    storage = new MinioStorageEngine(client, bucket, {
        bucket: {
            init: true,
            versioning: false,
            forceDelete: false
        },
        path : '',
        object: {
            name: (req, file) => {
                return `${getFileName()}${path.extname(file.originalname)}`;
            }
        },
    });
} catch {
    console.error(`Error when connecting to minio at ${getMinioUrl()}.`);
}

export function uploadImageMiddleware(req, res, next){
    multer({storage}).single('image')(req, res, err => {
        if (err){
            console.error("Upload to minio error.", err);
            return res.status(500).send({message: "Erro ao salvar imagem."});
        }

        if (req.file){
            //TODO this only works for localhost I think
            req.body.imageUrl = getMinioUrl(req.file.filename);
        }
        return next();
    });
}

export async function deleteImage(url){
    const fileName = url.split('/').pop()
    await client.removeObjects(bucket, [fileName]);
}