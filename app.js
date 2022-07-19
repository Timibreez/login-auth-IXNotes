const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));

// Login Route
app.get('/', (req, res) => {
    res.render('index', {title: 'IXNote Enterprise | Login'})
})

app.listen(port, () => {
    console.log('listening to the server on http://localhost:3000')
})