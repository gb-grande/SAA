import Admin from "../models/Admin.js"
import bcrypt from 'bcrypt'

export async function makeLogin(req, res) {
    console.log(req.body);
    const user = req.body.user;
    const password = req.body.password;

    const Find = await Admin.find({user})
        .then(response => {
            return response;
        }).catch(erro => {
            return {erro: erro};
        });
    
    console.log(Find);
    
    if (Find == '' || Find.erro) {
        console.log("Usuario ou senha inválidos.");
        res.status(401).send({message: "Usuário ou senha inválidos."});
        return;
    }

    await bcrypt.compare(password, Find[0].password, function(err, result) {
        if (err) {
            console.error('Error:', err);
            return;
        }

        if (result) {
            console.log("Senha correta! Autorizando o login.");
            res.send("Login efetuado");
        } else {
            console.log("Senha incorreta! Informando o usuário.");
            res.status(401).send({message: "Usuário ou senha inválidos."});
        }
    });

}