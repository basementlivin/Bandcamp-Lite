console.log("Never underestimate Ringo Starr.")
//
const methodOverride = require('method-override')
// npm init -y nodemon, express, mongoose, *axios
const express = require('express');
require('./config/db.connection')

// CONTROLLER IMPORTS
const bandcampController = require('./controllers/bandcamp_controller.js');
const { Artist, Album } = require('./models/models');
//const searchController = require('./controllers/search_controller.js')

// App Config
const app = express();
const PORT = 4001;
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'))
app.use(methodOverride('_method'));

// Router - Models
app.use('/test', bandcampController)
//app.use('/search', searchController)

// Home Route
app.get('/', async (req, res) => {
    try {
        
        let artists = await Artist.find()
        let albums = await Album.find()
        let context = [artists, albums]
        res.render('home.ejs', {context})
    } catch (err) {
        console.log(err)
        res.redirect('*')
    }
    
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
app.listen(process.env.PORT || 4001);

// exports module.exports = app**

