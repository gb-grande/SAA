import Admin from "../models/Admin.js"
import bcrypt from 'bcrypt'

function serverError(err, res) {
    console.error('Error:', err);
    res.status(500).send({message: "Erro no servidor."});
}

function authError(res) {
    console.log("Usuario ou senha inválidos.");
    res.status(401).send({message: "Usuário ou senha inválidos."});
}

export async function makeLogin(req, res) {
    const user = req.body.user;
    const password = req.body.password;

    try {
        const adm = await Admin.findOne({user});
        console.log(adm);

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
                console.log("Senha correta! Autorizando o login.");
                res.sendStatus(200);
            } else {
                authError(res);
            }
        });
    } catch(err) {
        serverError(err, res);
    }
}