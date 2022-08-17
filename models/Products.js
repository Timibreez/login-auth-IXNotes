const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    item: {type: String, unique: true, required: true},
    quantity: {type: Number, required: true},
    price: {type: Number, required: true},
    expiringDate: {type: Date, default: Date.now, expires: new Date(req.body.sleepTime)}
})

const Product = mongoose.model('product', productSchema)
module.exports = Product