import Admin from "../models/Admin.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// Aux function to handle server error.
function serverError(err, res) {
    console.error('Error:', err);
    res.status(500).send({message: "Erro no servidor."});
}

// Aux function to handle authentication error.
function authError(res) {
    console.log("Usuario ou senha inválidos.");
    res.status(401).send({message: "Usuário ou senha inválidos."});
}

/**
 * Handles the login process for an admin.
 * Validates the provided credentials, generates a JWT token upon successful authentication,
 * and sends the token back to the client. 
 * If the authentication fails, an appropriate error message is sent.
 * 
 * @param {object} req The request object, containing the login credentials.
 * @param {object} res The response object.
 */
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