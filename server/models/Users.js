const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    serial: Number
})

const UserModel = mongoose.model("users", userSchema)
module.exports = UserModel