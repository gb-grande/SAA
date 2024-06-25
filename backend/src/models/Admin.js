import mongoose from "mongoose";

/**
 * A MongoDB shema for representing admin users.
 * They have an unique username and a password.
 */
const adminSchema = new mongoose.Schema({
    user: {
        type: String,
        required: [true, 'O usuário é obrigatório.'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'A senha é obrigatória.']
    }
});

const Admin = new mongoose.model("Admin", adminSchema);
export default Admin;