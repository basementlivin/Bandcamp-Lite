const express = require('express');
const router = express.Router();

// Middleware
router.use(express.json());
router.use(express.urlencoded({extended: false}))

// Model Import
// const thing = require('../models/(file)?');

// New route - http://localhost:XXXX/test/new
router.get('/new', (req, res) => {
    res.send('/test/new works')
})

// Create route
//router.post for adding new item to db

    //temp
    router.post('/', async (req, res) => {
        const newTest = req.body
        console.log("Post test req.body:" + newTest)    
    })
    //temp

// Show route - http://localhost:XXXX/test/param/:name
// router.get("/:name", async (req, res) => {
//     try{
//         console.log(req.params.name)
//         res.send(req.params.name)
//         //const found = await db.Song.findBy???(req.params.name)
//     }catch(err){
//         console.log(err)
//         //res.redirect('/404')
//     }
// })
//
// CRUD STUFF
//

router.get('/upload', (req, res) => {
    res.render('new.ejs')
})

router.get('/artists', (req, res) => {
    res.render('artists.ejs')
})

router.get('/albums', (req, res) => {
    res.render('albums.ejs')
})

router.get('/songs', (req, res) => {
    res.render('songs.ejs')
})

module.exports = router;