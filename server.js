console.log("Never underestimate Ringo Starr.")
//

// npm init -y nodemon, express, mongoose, *axios

const express = require('express');

// CONTROLLER IMPORTS

// App Config
const app = express();
const PORT = 4000;
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(express.static('public'))

// Router - Models

// Home Route
app.get('/', (req, res) => {
    res.render('home.ejs')
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