import {promises as fs} from "fs";
import '../config.js'

const fileDir = 'infoTexts.json';

export async function getInfoText(req, res){
    try{
        const json = await fs.readFile(fileDir, {encoding: "utf8"});
        const info = JSON.parse(json);
        return (req.params.id in info)
            ? res.status(200).send(info[req.params.id])
            : res.status(404).send({message: 'Texto não encontrado.'});
    } catch (e){
        console.log('Unhandled error when getting info texts:', e);
        return res.status(500).send({message: "Erro ao tentar encontrar texto."});
    }
}

export async function setInfoText(req, res){
    try {
        let json = await fs.readFile(fileDir, {encoding: "utf8"});
        const info = JSON.parse(json);
        info[req.params.id] = req.body.data;
        json = JSON.stringify(info, null, 2);
        await fs.writeFile(fileDir, json, {encoding: "utf8"});
        return res.status(200).send({message: 'Texto atualizado.'});
    } catch (e){
        console.log('Unhandled error when updating info texs:', e);
        return res.status(500).send({message: "Erro ao tentar atualizar texto."});
    }
}