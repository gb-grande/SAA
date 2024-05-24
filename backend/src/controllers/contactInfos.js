import {promises as fs} from "fs";

const fileDir = "contactInfos.json"

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
    //TODO proper validation
    if (!('phone' in req.body && 'address' in req.body && 'instagram' in req.body && 'facebook' in req.body)){
        return res.status(400).send("Malformed contact info in request.")
    }

    //Project into only the target fields to avoid writing other data from req.body into the .json
    const info = {
        'phone': req.body.phone,
        'address': req.body.address,
        'instagram': req.body.instagram,
        'facebook': req.body.facebook
    };
    try {
        await fs.writeFile(fileDir, JSON.stringify(info, null, 2), {encoding: "utf8"});
        return res.status(200).send();
    } catch {
        return res.status(500).send("Contact info not saved.");
    }
}