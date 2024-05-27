import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const Admin = new mongoose.model("Admin", adminSchema);
export default Admin;