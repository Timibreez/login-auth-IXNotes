const mongoose = require('mongoose')
const schema = new mongoose.schema({
    email: String,
    password: String
})

module.exports = mongoose.model('User', schema)
