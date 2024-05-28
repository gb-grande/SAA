import Admin from "../models/Admin.js";

export async function registerAdmin(req, res){
    try {
        const admin = new Admin({
            user: req.body.user,
            password: req.body.password
        });
        await admin.save();
        console.log('Saved new admin.');
        return res.status(200).send('Admin registered.')
    } catch (e){
        console.log('error registering admin', e);
        return res.status(400).send('Error registering admin.')
    }
}