import jwt from 'jsonwebtoken'

/**
 * Middleware function to authenticate incoming requests.
 * 
 * @param {object} req - Request object, JWT token provided in header.
 * @param {object} res - Response object.
 * @param {function} next - Callback function to pass control to the next middleware.
 */
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