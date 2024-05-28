import Admin from "../models/Admin"

// TODO: use JWT and do propper authentication.

export async function makeLogin(req, res) {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    Find = await Admin.find({usuario, senha})
        .then(response => {
            return response;
        }).catch(erro => {
            return {erro: erro};
        });
    
    if (Find == '' || Find.erro) {
        res.send(404, {message: "Usuário ou senha inválidos."});
        return;
    }

    res.cookie('Usuario', usuario);
    res.sendStatus(200);
}