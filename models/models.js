const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema ({
    type: {type: String, required: true, default: "Artist"},
    name: {type: String, required: true},
    members: [{type: String, default: null}],
    bio: {type: String, default: null},
    yearFormed: {type: Number, default: null}, 
    location: {type: String, default: null},
    active: {type: Boolean, default: true},
    discography: { 
        albums: [{type: mongoose.Types.ObjectId, ref: 'Album', default: null},],
        songs: [{type: mongoose.Types.ObjectId, ref: 'Song', default: null},], 
    },
    genre: [{type: String, default: null}], //[{type: mongoose.Schema.Types.ObjectID()***}], //*
    media: [{type: String, default: null}], // array of URLs to assetts, album art, merch photos, etc, that the artist wants to display on page
    profilePicture: {type: String, default: null}, //URL to cover photo asset, can ref media array probably 
})

const albumSchema = new Schema ({
    type: {type: String, required: true, default: 'Album'},
    title: {type: String, required: true},
    artist: {type: mongoose.Types.ObjectId, ref: 'Artist', default: null},
    tracks: [{type: mongoose.Types.ObjectId, ref: 'Song', default: null},], //make this ref song schema
    albumart: {type: String, default: null}, //URL to cover art asset
    year: {type: Number, default: null},
    genre: [{type: String, default: null}] //make this ref song schema
})

const songSchema = new Schema ({
    type: {type: String, required: true, default: 'Song'},
    title: {type: String, required: true},
    audio: {type: String, default: null}, //base64 encoded audio string.
    //audiosrcname: {type: String, default: null} //stores original filename and ext of source audio file.
    artist: {type: mongoose.Types.ObjectId, ref: 'Artist', default: null}, //* default to artist of page
    album: {type: String, default: null}, //*  may need different default
    genre: [{type: String, default: null}],
})


const Artist = mongoose.model("Artist", artistSchema)
const Album = mongoose.model("Album", albumSchema)
const Song = mongoose.model("Song", songSchema)
module.exports = {
    Artist,
    Album,
    Song
}