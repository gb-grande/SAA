import Admin from "../models/Admin.js";

export async function registerAdmin(req, res){
    try {
        const admin = new Admin({
            user: req.body.user,
            password: req.body.password
        });
        await admin.save();
        return res.status(201).send('Admin registered.');
    } catch (e){
        if (e.code === 11000){
            return res.status(409).send('Duplicate user.');
        }
        return res.status(400).send('Error registering admin.')
    }
}