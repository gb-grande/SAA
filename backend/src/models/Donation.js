import mongoose from "mongoose";

const donationSchema = new mongoose.Schema({
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

const Donation = new mongoose.model("Donation", donationSchema);
export default Donation;