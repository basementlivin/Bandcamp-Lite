const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const artistSchema = new Schema ({
   
    name: {type: String, required: true},
    members: [String,],
    bio: {String},
    yearFormed: {Number}, 
    location: {String},
    active: {type: Boolean, default: true},
    discography: { 
        albums: [{type: mongoose.Types.ObjectId, ref: 'Album'},],
        songs: [{type: mongoose.Types.ObjectId, ref: 'Song'},], 
    },
    // genre: [{type: mongoose.Schema.Types.ObjectID()***}], //*
    media: [{String}], // array of URLs to assetts, album art, merch photos, etc, that the artist wants to display on page
    profilePicture: {String}, //URL to cover photo asset, can ref media array probably
    //* place for media uploads? array of images? 
 
})

const albumSchema = new Schema ({
    title: {type: String, required: true},
    artist: {type: mongoose.Types.ObjectId, ref: 'Artist'},
    tracks: [{type: mongoose.Types.ObjectId, ref: 'Song'}], //make this ref song schema
    albumart: String, //URL to cover art asset
    year: {Number},
    genre: [String] //make this ref song schema
})

const songSchema = new Schema ({
    title: {type: String, required: true},
    audio: {type: String}, //URL to audio assett in database 
    artist: {type: mongoose.Types.ObjectId, ref: 'Artist'}, //* default to artist of page
    album: {type: String, default: null}, //*  may need different default
    genre: [String]
    //length? //*check out timestamp formatting
})


const Artist = mongoose.model("Artist", artistSchema)
const Album = mongoose.model("Album", albumSchema)
const Song = mongoose.model("Song", songSchema)
module.exports = [
    Artist,
    Album,
    Song
] // return to this lol