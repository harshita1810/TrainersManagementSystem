const mongoose = require('mongoose')

const ContactSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true },
    phoneNo: String,
    emailSubject : String,
    message : String,
    // isVerified: { type: Boolean, default: false },
    otp: { type: String },
})

const ContactModel = mongoose.model("contacts", ContactSchema)
module.exports = ContactModel