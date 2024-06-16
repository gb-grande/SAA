import jwt from 'jsonwebtoken'

async function authMidd(req, res, next) {
    const tokenHead = req.header('Authorization');
    const token = tokenHead && tokenHead.split(' ')[1];
    if (!token) return res.status(401).send({message: "Token inválido.", invalidToken: true});

    jwt.verify(token, process.env.JWT_SECRET, (err, _) => {
        if (err) {
            return res.status(401).send({message: "Token inválido.", invalidToken: true});
        }
        next();
    });
}

export default authMidd;