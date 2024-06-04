import mongoose from "mongoose";

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