const mongoose = require('mongoose');
const { default: test } = require('node:test');

////
////temp server connection below
////
const connectionStr = 'mongodb+srv://badmeme:RTSmKHjCJn1PyVGI@cluster0.engpp09.mongodb.net/project2'

mongoose.connect(connectionStr);
mongoose.connection.on('connected', () => {
  console.log(`[${new Date().toLocaleTimeString()}] - MongoDB connected ... 🙌 🙌 🙌`); 
});
mongoose.connection.on('error', (error) => {
  console.log('MongoDB connection error 😥', error);
});
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected  ⚡️ 🔌 ⚡️'));
////
////temp server connection above
////

const Models = require('./models.js')
const Artist = Models.Artist
const Album = Models.Album
const Song = Models.Song

//console.log ({Artist: Artist})

let newArtist = {}
const testArtist = ({
    name: "Radiohead",
    members: ["Thom Yorke", 'Jonny Greenwood', 'Colin Greenwood', "Ed O'brien", "Phil Selway"],
    bio: "i like em",
    yearFormed: 1985, //** new Date?
    location: "Abingdon, Oxfordshire", //*
    active: true,
    discography: {
        albums: [], //*
        songs: [] //*
    },
    genre: ["Rock", "Electronic", "Experimental"], //* push genre from all songs ?
    profilePicture: "https://cdn.mos.cms.futurecdn.net/QyuRpsE7sBno5atYkzHK43-1920-80.jpg.webp", //URL to cover photo asset
})

const testAlbum = ([
    {
    title: "OK Computer",
    artist: "", // * default to artist of page
    tracks: [], // *
    albumart: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png", //URL to cover art asset
    year: 1997,
    genre: ["Rock", "Experimental"]
    },
])

const testSongs = ([
    {
        title: "Airbag",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer" //*  
        //length? //*check out timestamp formatting
    },
    {
        title: "Paranoid Android",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer" //* 
        //length? //*check out timestamp formatting
    },
    {
        title: "Subterrenean Homesick Alien",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Exit Music (For a Film)",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Let Down",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Karma Police",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Fitter Happier",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Electioneering",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Climbinb Up the Walls",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "No Surprises",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "Lucky",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    },
    {
        title: "The Tourist",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: "OK Computer"
    }
])

///---Creating test data---///
console.log("creating test data");

async function populateArtist () {
    try {
        let deleted = await Artist.deleteMany({});
        //console.log(deleted)
        //let reloading = await db.Artist.insertMany();
        let accountArtist = await Artist.create({
            name: testArtist.name,
            members: testArtist.members,
            bio: testArtist.bio,
            yearFormed: testArtist.yearFormed,
            location: testArtist.location,
            active: testArtist.active,
            discography: testArtist.disography,
            genre: testArtist.genre,
            profilePicture: testArtist.profilePicture
        });
        console.log(accountArtist)
        return accountArtist;
    }
    catch (err) {
        console.log(err)
    }
    console.log("created test artist");
}

async function populateAlbums( accountArtist ) {
    try{
        await Album.deleteMany();
        let accountAlbum = await Album.create({
            title: testAlbum[0].title,
            artist: accountArtist._id,
            tracks: [],
            albumart: testAlbum[0].albumart,
            year: testAlbum[0].year,
            genre: []
        })
        console.log("Album:", accountAlbum)
        return accountAlbum
    }

    catch (err) {
        console.log(err)
    }
}

async function populateSongs ( accountArtist, accountAlbum ) {
    try {
        let deleted = await Song.deleteMany({});
        for (i = 0; i < testSongs.length; i++) {
            testSongs[i].artist = accountArtist._id
            //testSongs[i].album = accountAlbum.title
        }
        let accountSongs = await Song.insertMany(testSongs); 
        return accountSongs       
    }

    catch (err) {
        console.log(err)
    }
    console.log("created test songs");
}

async function updateArtist ( inputA, inputB, inputC ) {
    try {
        let tempDiscog = inputA.discography
        console.log("temp test", inputB._id)
        tempDiscog.albums.push(inputB._id)
        for (i =0 ; i < inputC.length; i++) {
            tempDiscog.songs.push(inputC[i]._id)
        }
        console.log("final temp discog", tempDiscog)
        await Artist.findByIdAndUpdate(inputA._id, {discography: tempDiscog})
    }
    
    catch (err) {
        console.log(err)
    }
}

async function updateAlbum ( b, c ) {
    try {
        let tempTracks = b.tracks
        //let tempGenre = b.genre
        for (i = 0 ; i < c.length; i++) {
            tempTracks.push(c[i]._id)
            //tempGenre.push(c[i].genre[j] if its not in there)
        }
        await Album.findByIdAndUpdate(b._id, {tracks: tempTracks})
    }

    catch (err) {
        console.log(err)
    }
}

async function populateSeedData() {
    let artist = await populateArtist();
    let album = await populateAlbums(artist);
    let songs = await populateSongs(artist, album);
    await updateArtist (artist, album, songs)
    await updateAlbum (album, songs)

    mongoose.connection.close();
}

populateSeedData();