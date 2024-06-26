import {promises as fs} from "fs";
import '../config.js'
import * as url from "url";
import multer from 'multer';
import * as path from "path";

const imageFolderDir = './images/';

// Finds the path of an existing file based on the section id, or null if no image is present.
async function getImagePath(id) {
    const files = await fs.readdir(imageFolderDir);
    const fileNameRegex = new RegExp(`^${id}\.(?:png|jpg|jpeg)$`);
    const imageIndex = files.findIndex(name => fileNameRegex.test(name));
    return (imageIndex === -1) ? null : imageFolderDir + files[imageIndex];
}

/**
 * Retrieves an image based on the provided image section ID.
 * 
 * @param {object} req - The request object, containing the image section ID as parameter.
 * @param {object} res - The response object, used to send back status and image url.
 */
export async function getImage(req, res) {
    try {
        if (req.params.id === undefined){
            return res.status(400).send({message: 'Id de seção ausente.'});
        }

        const imagePath = await getImagePath(req.params.id);
        if (imagePath === null){
            return res.status(404).send({message: 'Imagem não encontrada.'});
        }

        const imageUrl = url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: imagePath
        });
        return res.status(200).send({imageUrl: imageUrl});
    } catch (e) {
        console.log('Unhandled error when getting image:', e);
        return res.status(500).send({message: "Erro ao tentar encontrar imagem."});
    }
}

// Configuring multer storage
const storage = multer.diskStorage({
    destination: imageFolderDir,
    filename: async (req, file, cb) => {
        if (!(['image/png', 'image/jpeg'].includes(file.mimetype))){
            return cb(new Error('INVALID_TYPE'));
        }

        const existingFile = await getImagePath(req.params.id);
        if (existingFile !== null){
            await fs.unlink(existingFile);
        }
        return cb(null, req.params.id + path.extname(file.originalname));
    },
});
const upload = multer({storage: storage});

/**
 * Sets an image for a specific section identified by ID.
 * 
 * @param {object} req - The request object, containing the image section ID as parameter.
 * @param {object} res - The response object, used to send back status and image url.
 */
export async function setImage(req, res) {
    try {
        if (req.params.id === undefined){
            return res.status(400).send({message: 'ID ausente na requisição.'});
        }

        // The multer api does not work well with async, so I need to use callbacks.
        // The usual way to use multer is via middleware, but I'd rather have proper error/return handling.
        // The custom filename func in storage returns a custom error
        upload.single('image')(req, res, (err) => {
            if (err) {
                switch (err.message){
                    case 'INVALID_TYPE':
                        res.status(400).send({message: 'Extensão de imagem inválida.'});
                        break;
                    default:
                        console.log('Unhandled error during Multer upload.', err);
                        res.status(500).send({message: "Erro ao tentar atualizar imagem."});
                        break;
                }
            }
            else {
                const imageUrl = url.format({
                    protocol: req.protocol,
                    host: req.get('host'),
                    pathname: imageFolderDir + req.file.filename
                });
                res.status(200).send({imageUrl: imageUrl});
            }
        });
    } catch (e) {
        console.log('Unhandled error when updating image:', e);
        return res.status(500).send({message: "Erro ao tentar atualizar imagem."});
    }
}