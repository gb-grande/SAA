import Admin from "../models/Admin.js";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import '../config.js';

export async function registerAdmin(req, res){
    try {
        //Password can't be validated by mongoose because bcrypt's hashing turns empty string into a valid hash.
        if (!req.body.password)
            return res.status(400).send({message: 'A senha é obrigatória.'});

        const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS);
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const admin = new Admin({
            user: req.body.user,
            password: hashedPassword
        });
        await admin.save();
        return res.status(201).send({message: 'Administrador registrado.'});
    } catch (e){
        if (e.code === 11000){
            return res.status(409).send({message: 'Administrador já existente.'});
        }
        if (e instanceof mongoose.Error.ValidationError){
            const errors = Object.values(e.errors).map(e => ({[e.path]: e.message}));
            return res.status(400).send({validationErrors: Object.assign({}, ...errors)});
        }
        console.error('Unhandled error registering admin.', e);
        return res.status(500).send({message: 'Error ao registrar administrador.'})
    }
}