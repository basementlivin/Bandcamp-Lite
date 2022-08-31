//const model = require('models.js')

const testArtist = ({
    name: "Radiohead",
    members: ["Thom Yorke", 'Jonny Greenwood', 'Colin Greenwood', "Ed O'brien", "Phil Selway"],
    bio: "i like em",
    yearFormed: 1985, //** new Date?
    location: "Abingdon, Oxfordshire", //*
    active: true,
    albums: [], //*
    songs: [], //*
    genre: ["Rock", "Electronic", "Experimental"], //*
    profilePicture: {String}, //URL to cover photo asset
})

const testAlbum = ({
    title: "OK Computer",
    artist: testArtist.name, // * default to artist of page
    tracks: [], // *
    albumart: "", //URL to cover art asset
    year: 1997,
    genre: ["Rock", "Experimental"]
})

const testSong = ({

    title: Airbag,
    audio: "", //URL to audio assett in database 
    artist: [testArtist.name], //* default to artist of page
    album: [testAlbum.name] //*  
    //length? //*check out timestamp formatting

})

//const testAlbum