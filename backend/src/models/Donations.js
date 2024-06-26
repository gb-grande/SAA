import mongoose from "mongoose";

/**
 * A MongoDB schema for representing pet food donations.
 * Includes: the username for admin that registered donation,
 * donation source, destination, type, amount and date.
 */
const donationsSchema = new mongoose.Schema({
    srcDest: {
        type: String,
        required: [true, 'A origem/destino da doação é obrigatória.']
    }, 
    type: {
        type: String,
        required: [true, 'O tipo é obrigatório']
    },
    amount: {
        type: Number,
        required: [true, 'A quantidade é obrigatória'],
        min: 0
    },
    date: {
        type: Date,
        required : [true, "A data é obrigatória"]
    },
    flow: {
        type: String,
        required: [true, "É necessário informar se foi recebido ou enviada"],
        enum: ["received", "sent"]
    }
});

const Donations = new mongoose.model("Donations", donationsSchema);
export default Donations;