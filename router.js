const express = require('express')
const router = express.Router()

const credentials = {
    email: 'ffftimi@gmail.com',
    password: 'admin123'
}

// Login user
router.post('/login', (req, res) => {
    if (req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email
        // res.redirect('/dashboard')
        res.end('Login successful')
    }
    else {
        res.end('Invalid User')
    }
})

module.exports = router