import jwt from 'jsonwebtoken'

export async function authenticateToken(req, res) {
    let token = req.header('Authorization');
    if (!token) return res.status(401).send({message: "Token inválido."});

    token = token.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, sub) => {
        if (err) {
            return res.status(401).send({message: "Token inválido."});
        }
        res.status(200).send({message: "Token válido."});
    });
}