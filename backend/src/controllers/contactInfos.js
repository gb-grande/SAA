import {promises as fs} from "fs";
import ContactInfo from "../models/ContactInfo.js";
import mongoose from "mongoose";

const fileDir = "contactInfos.json"

export async function getContactInfo(req, res){
    try{
        const infoJson = await fs.readFile(fileDir, {encoding: "utf8"});
        const info = JSON.parse(infoJson);
        return res.status(200).send(info);
    } catch (e){
        console.log(e)
        return res.status(500).send({message: "Não foi possível encontrar a informação de contato."});
    }
}

export async function setContactInfo(req, res){
    const info = new ContactInfo(req.body);
    try {
        await info.validate();
        await fs.writeFile(fileDir, JSON.stringify(info.toObject(), null, 2), {encoding: "utf8"});
        return res.status(200).send();
    } catch (e) {
        if (e instanceof mongoose.Error.ValidationError){
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.log('Unhandled error when setting contact info.', e);
        return res.status(500).send({message: "Erro de servidor ao salvar informação de contato."});
    }
}