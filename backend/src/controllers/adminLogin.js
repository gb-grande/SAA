import Admin from "../models/Admin.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

function serverError(err, res) {
    console.error('Error:', err);
    res.status(500).send({message: "Erro no servidor."});
}

function authError(res) {
    console.log("Usuario ou senha inválidos.");
    res.status(401).send({message: "Usuário ou senha inválidos."});
}

export async function makeLogin(req, res) {
    const user = req.body.user.trim();
    const password = req.body.password;

    try {
        const adm = await Admin.findOne({user});

        if (adm === null) {
            authError(res); 
            return;
        }

        bcrypt.compare(password, adm.password, function(err, result) {
            if (err) {
                serverError(err, res);
                return;
            }

            if (result) {
                const token = jwt.sign({
                    sub: adm.user,
                }, process.env.JWT_SECRET, {expiresIn: '1d'});
                res.status(200).send({token});
            } else {
                authError(res);
            }
        });
    } catch(err) {
        serverError(err, res);
    }
}