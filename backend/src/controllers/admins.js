import Admin from "../models/Admin.js";
import bcrypt from "bcrypt"
import '../config.js'

export async function registerAdmin(req, res){
    try {
        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const admin = new Admin({
            user: req.body.user,
            password: hashedPassword
        });
        await admin.save();
        return res.status(201).send('Admin registered.');
    } catch (e){
        if (e.code === 11000){
            return res.status(409).send('Duplicate user.');
        }
        console.error('Unhandled error registering admin.', e);
        return res.status(400).send('Error registering admin.')
    }
}