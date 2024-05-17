import {promises as fs} from "fs";

//TODO later extract path into .env file
const fileDir = "contactInfo.json"

export async function getContactInfo(req, res){
    try{
        const infoJson = await fs.readFile(fileDir, {encoding: "utf8"});
        const info = JSON.parse(infoJson);
        return res.status(200).send(info);
    } catch (e){
        console.log(e)
        return res.status(500).send("Contact info not found.");
    }
}

export async function setContactInfo(req, res){
    const {telephone, address, instagram, facebook} = req.body;
    //TODO proper validation
    if (telephone === null || address === null || instagram === null || facebook === null){
        return res.status(400).send("Malformed contact info in request.")
    }

    try {
        const infoJson = JSON.stringify({telephone, address, instagram, facebook});
        await fs.writeFile(fileDir, infoJson, {encoding: "utf8"});
        return res.status(200).send();
    } catch {
        return res.status(500).send("Contact info not saved.");
    }
}