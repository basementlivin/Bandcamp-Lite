const express = require('express');
const router = express.Router();
//const methodOverride = require('method-override')

// Middleware
router.use(express.json());
router.use(express.urlencoded({extended: false}))
//router.use(methodOverride('_method'))

// Model Import
const Models = require('../models/models.js');
const Artist = Models.Artist
const Album = Models.Album
const Song = Models.Song

// New route - http://localhost:XXXX/test/new
router.get('/upload', (req, res) => {
    res.render('new.ejs')
})

router.get('/album/:ext/edit', async (req, res) => {
    try {
        let foundAlbum = await Album.find({title: req.params.ext})
        context = {album: foundAlbum[0]}
        console.log (context)
        
        res.render('edit.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
}) 

router.get('/artistprofile/:ext', async (req, res) => {
    try {
        let foundArtist = await Artist.find({name: req.params.ext}) 
        //console.log(foundArtist)
        let context = { artist: foundArtist[0] }
        //console.log("context", foundArtist)
        res.send(context)
        res.render('show_artist.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
    //right now the find function seems to be working but its returning a featureless object on artists that dont exist in database
    //:ext seems to be case sensitive, can clean up the code for friendlier use later
})

router.get('/album/:ext', async (req, res) => {
    try {
        let foundAlbum = await Album.find({title: req.params.ext}) 
        let context = { album: foundAlbum[0] }
        //console.log(foundAlbum)
        // res.send(context)
        res.render('show_album.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
    //:ext seems to be case sensitive, can clean up the code for friendlier use later
})

router.get('/song/:ext', async (req, res) => {
    try {
        let foundSong = await Song.find({title: req.params.ext}) 
        let context = { song: foundSong[0] }
        console.log(foundSong)
        res.send(context)
        //res.render('showsong.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
    //:ext seems to be case sensitive, can clean up the code for friendlier use later
})

// Create route
//router.post for adding new item to db

router.post('/', async (req, res) => {
    //const newTest = req.body;
    console.log("Post test req.body:", req.body);
    try {
        await Artist.create({
            name: req.body.artistname,
            //members: [req.body.members]
        })
        await Album.create({
            title: req.body.albumtitle
        })
        await Song.create({
            title: req.body.tracktitle
        });
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }

})

// Stub out router.post('/edit')
router.put('/:ext', async (req, res) => {
    try {
        let changes = await Album.findById(req.params.ext)
        changes.title = req.body.title
        // changes.property2 = req.body.property2 
        // changes.property3 = req.body.property3 
        
        console.log("Staged:", {changes})
        await Album.findByIdAndUpdate(req.params.ext, changes)
        res.redirect('/')
        
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

router.post('/:ext', async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.ext);
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})
// })
// //

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



router.get('/artists', async (req, res) => {
    try {
        const allArtists = await Artist.find()
        const context = { artists: allArtists }
        console.log(context)
        res.render('artists.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

router.get('/albums', async (req, res) => {
    try {
        const allAlbums = await Album.find()
        const context = { albums: allAlbums }
        console.log(context)
        res.render('albums.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

router.get('/songs', async (req, res) => {
    try {
        const allSongs = await Songs.find()
        const context = { songs: allSongs }
        console.log(context)
        res.render('songs.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

module.exports = router;