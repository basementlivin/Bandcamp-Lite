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
        let context = [foundArtist, displayAlbum]
        res.render('show_artist.ejs', {context})
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

router.get('/album/:ext', async (req, res) => {
    try {
        let context = await Album.findById(req.params.ext).populate({path: 'tracks'}) 
        res.render('show_album.ejs', {context})
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

router.get('/song/:ext', async (req, res) => {
    try {
        let context = await Song.findById(req.params.ext) 
        res.render('show_song.ejs', {context})
    } catch (err) {
        console.log(err)
        res.redirect('/404')
    }
})

// Create route - *

router.post('/', async (req, res) => {
    try {
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

//Index pages by Model
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