import {promises as fs} from "fs";
import ContactInfo from "../models/ContactInfo.js";
import mongoose from "mongoose";

const fileDir = "contactInfos.json"

/**
 * Fetches the contact information.
 * 
 * @param {object} req The request object.
 * @param {object} res The response object, used to send back status and data.
 */
export async function getContactInfo(req, res) {
    try {
        const infoJson = await fs.readFile(fileDir, {encoding: "utf8"});
        const info = JSON.parse(infoJson);
        return res.status(200).send(info);
    } catch (e) {
        console.log(e)
        return res.status(500).send({message: "Não foi possível encontrar a informação de contato."});
    }
}

/**
 * Sets the contact information.
 * 
 * @param {object} req - The request object, containing the new contact information in the body.
 * @param {object} res - The response object.
 */
export async function setContactInfo(req, res) {
    // Project into only the target fields to avoid writing other data from req.body into the .json
    const info = {
        'phone': req.body.phone,
        'address': req.body.address,
        'instagram': req.body.instagram,
        'facebook': req.body.facebook
    };

    try {
        await ContactInfo.validate(info);
        await fs.writeFile(fileDir, JSON.stringify(info, null, 2), {encoding: "utf8"});
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