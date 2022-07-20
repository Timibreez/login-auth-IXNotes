const mongoose = require('mongoose')
const schema = new mongoose.schema({
    email: {type: String, unique: true},
    password: {type: String}
})

module.exports = mongoose.model('User', schema)
