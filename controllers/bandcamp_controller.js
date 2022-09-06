const express = require('express');
const { runInNewContext } = require('vm');
const router = express.Router();
//const methodOverride = require('method-override')
const formidable = require('formidable')
const fs = require('fs')

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

// Edit routes

// router.get('/artistprofile/:ext/edit', async (req, res) => {
//     try {
//         let foundArtist = await Artist.find({name: req.params.ext})
//         context = { artist : foundArtist[0]}
//         console.log (context)
        
//         res.render('edit.ejs', context)
//     } catch (err) {
//         console.log(err)
//         res.redirect('/404')
//     }
// }) 

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



// Show routes
router.get('/artistprofile/:ext', async (req, res) => {
    try {
        let foundArtist = await Artist.findById(req.params.ext).populate(['discography.albums', 'discography.songs'])
        let displayAlbum = await Album.findById(foundArtist.discography.albums[0]._id).populate({path: 'tracks'})
        //let context = { artist: foundArtist[0] }
        let context = [foundArtist, displayAlbum]
        //console.log("context", foundArtist)
        //res.send(context)
        res.render('show_artist.ejs', {context})
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
    //right now the find function seems to be working but its returning a featureless object on artists that dont exist in database
    //:ext seems to be case sensitive, can clean up the code for friendlier use later
})

router.get('/album/:ext', async (req, res) => {
    try {
        let context = await Album.findById(req.params.ext).populate({path: 'tracks'}) 
        
        console.log("populate test:", context.tracks)
        
        //console.log(foundAlbum)
        // res.send(context)
        res.render('show_album.ejs', {context})
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
    //:ext seems to be case sensitive, can clean up the code for friendlier use later
})

router.get('/song/:ext', async (req, res) => {
    
    fs.writeFile
    try {
        let context = await Song.findById(req.params.ext) 
        res.render('show_song.ejs', {context})
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
    //console.log("Post test req.body:", req.body);
    //console.log("req:", req)
    
    try {
        //convert req.body.audiofile to base64 byte string
        new formidable.IncomingForm().parse(req, async (err, fields, files) => {
            console.log("Fields", fields)
            console.log("Files", files)
            
            await Artist.create({
                name: fields.artistname,
                //members: [req.body.members]
            })
            await Album.create({
                title: fields.albumtitle
            })

            fs.readFile(files.audiofile.filepath, async (err, data) => {
                await Song.create({
                    title: fields.tracktitle,
                    audio: data.toString('base64')
                });
            })
            
            res.redirect('/')
            
        })
        
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }

})

// EDIT requests
router.put('/:ext', async (req, res) => {
    try {
        let changes = await Album.findById(req.params.ext)
        changes.title = req.body.title
        // changes.property2 = req.body.property2 
        // changes.property3 = req.body.property3 
        
        //console.log("Staged:", changes)
        await Album.findByIdAndUpdate(req.params.ext, changes)
        res.redirect('/')
        
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

// DELETE requests
router.delete('/:ext', async (req, res) => {
    try {
        await Album.findByIdAndDelete(req.params.ext);
        res.redirect('/')
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

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

// Search/filter routes

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
        const allSongs = await Song.find()
        const context = { songs: allSongs }
        console.log(context)
        res.render('songs.ejs', context)
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

module.exports = router;