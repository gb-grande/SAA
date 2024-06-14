import jwt from 'jsonwebtoken'

export async function authenticateToken(req, res) {
    const tokenHead = req.header('Authorization');
    const token = tokenHead && tokenHead.split(' ')[1];
    if (!token) return res.status(401).send({message: "Token inválido."});

    jwt.verify(token, process.env.JWT_SECRET, (err, sub) => {
        if (err) {
            return res.status(401).send({message: "Token inválido."});
        }
        res.status(200).send({message: "Token válido."});
    });
}