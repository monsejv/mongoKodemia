const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        minlength: 10,
        maxlength: 180,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 15,
        required: true
    }
 })

module.exports = mongoose.model('Users', userSchema)