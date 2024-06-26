import jwt from 'jsonwebtoken'

/**
 * Authenticates a token.
 * This function verifies the JWT token provided in the request headers. 
 * 
 * @param {object} req The request object.
 * @param {object} res The response object.
 */
export async function authenticateToken(req, res) {
    const tokenHead = req.header('Authorization');
    const token = tokenHead && tokenHead.split(' ')[1];
    if (!token) return res.status(401).send({message: "Token inválido.", invalidToken: true});

    jwt.verify(token, process.env.JWT_SECRET, (err, sub) => {
        if (err) {
            return res.status(401).send({message: "Token inválido.", invalidToken: true});
        }
        res.status(200).send({message: "Token válido.", user: sub.sub});
    });
}