import mongoose from "mongoose";

/**
 * A MongoDB schema for representing contact information.
 * Includes: phone number, address, instagram user, facebook url.
 */
const schema = new mongoose.Schema({
    phone: {
        type: String,
        required: [true, 'Número de telefone é obrigatório.'],
        validate: [/^\+55[0-9]{2}9?[0-9]{8}$/, 'Número de telefone inválido.']
    },
    address: {
        type: String,
        required: [true, 'Endereço é obrigatório.']
    },
    instagram: {
        type: String,
        required: [true, 'Instagram é obrigatório.'],
    },
    facebook: {
        type: String,
        required: [true, 'Facebook é obrigatório.'],
        validate: [/^https:\/\/www\.facebook.com\/.+\/$/, 'Link de facebook inválido.']
    },
});

const ContactInfo = new mongoose.model('ContactInfo', schema);
export default ContactInfo;