const express = require('express')
const router = express.Router()
const User = require('../models/User')

// const credentials = {
//     email: 'ffftimi@gmail.com',
//     password: 'admin123'
// }

// Login user
router.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    User.findOne({email: email, password: password}, (err, user) => {
        if(err) {
            console.log(err)
            return res.status(500).send()
        }

        if(!user) {
            return res.status(404).send()
        }

        return res.status(200).send()
    })
})

// Register User
router.post('/register', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const newUser = new User()

    newUser.email = email
    newUser.password = password

    newUser.save((err, savedUser) => {
        if(err){
            console.log(err)
            return res.status(500).send()
        }

        return res.status(200).send()
    })
})

module.exports = router