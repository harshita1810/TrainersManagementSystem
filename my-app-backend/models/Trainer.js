const mongoose = require('mongoose')

const TrainerSchema = new mongoose.Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: String,
    // isVerified: { type: Boolean, default: false },
    otp: { type: String },
})

const TrainerModel = mongoose.model("trainers", TrainerSchema)
module.exports = TrainerModel