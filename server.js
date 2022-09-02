console.log("Never underestimate Ringo Starr.")
//
const methodOverride = require('method-override')
// npm init -y nodemon, express, mongoose, *axios
const express = require('express');
require('./config/db.connection')

// CONTROLLER IMPORTS
const bandcampController = require('./controllers/bandcamp_controller.js')

// App Config
const app = express();
const PORT = 4001;
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'));

// Router - Models
app.use('/test', bandcampController)

// Home Route
app.get('/', (req, res) => {
    res.render('home.ejs')
})

// Test redirects
app.get('/:ext', (req, res) => {
    let extension = req.params.ext
    console.log (extension)
    res.redirect(`/test/${extension}`)
})

//Routes - /artists, /albums, /songs

// 404 Wildcard Route

app.get('*', (req,res)=>{
    res.send('404 page goes here')
    //res.render('404')
})

// SERVER
app.listen(PORT, () => console.log(`Starting BandcampLite server at port: ${PORT}`))

// exports module.exports = app**