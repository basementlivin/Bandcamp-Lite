const mongoose = require('mongoose');
const { default: test } = require('node:test');

////
////temp server connection below
////
const connectionStr = 'mongodb+srv://badmeme:RTSmKHjCJn1PyVGI@cluster0.engpp09.mongodb.net/test'

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
const Artist = Models[0]
const Album = Models[1]
const Song = Models[2]

//console.log ({Artist: Artist})

let newArtist = {}
const testArtist = ({
    name: "Radiohead",
    members: ["Thom Yorke", 'Jonny Greenwood', 'Colin Greenwood', "Ed O'brien", "Phil Selway"],
    bio: "i like em",
    yearFormed: 1985, //** new Date?
    location: "Abingdon, Oxfordshire", //*
    active: true,
    // discography: {
    //     albums: [], //*
    //     songs: [] //*
    // }
    genre: ["Rock", "Electronic", "Experimental"], //* push genre from all songs ?
    profilePicture: "https://cdn.mos.cms.futurecdn.net/QyuRpsE7sBno5atYkzHK43-1920-80.jpg.webp", //URL to cover photo asset
})

const testAlbum = ({
    title: "OK Computer",
    artist: testArtist.name, // * default to artist of page
    tracks: [], // *
    albumart: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png", //URL to cover art asset
    year: 1997,
    genre: ["Rock", "Experimental"]
})

const testSongs = ([
    {
        title: "Airbag",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"] //*  
        //length? //*check out timestamp formatting
    },
    {
        title: "Paranoid Android",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"] //* 
        //length? //*check out timestamp formatting
    },
    {
        title: "Subterrenean Homesick Alien",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Exit Music (For a Film)",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Let Down",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Karma Police",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Fitter Happier",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Electioneering",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Climbinb Up the Walls",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "No Surprises",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "Lucky",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    },
    {
        title: "The Tourist",
        audio: "", //URL to audio assett in database 
        artist: newArtist._id, //* default to artist of page
        album: ["OK Computer"]
    }
])

///---Creating test data---///
console.log("creating test data");

// async function populateSeedData() {
    
// }

async function populateArtist () {
    try {
        let deleted = await Artist.deleteMany({});
        //console.log(deleted)
        //let reloading = await db.Artist.insertMany();
        let reloading = await Artist.create({
            name: testArtist.name,
            members: testArtist.members,
            yearFormed: testArtist.yearFormed,
            location: testArtist.location,
            active: testArtist.active,
            discography: testArtist.disography,
            genre: testArtist.genre,
            profilePicture: testArtist.profilePicture
        });
        //console.log(reloading)
    }
    catch (err) {
        console.log(err)
    }
    console.log("created test artist");
}

async function populateSongs () {
    try {
        let deleted = await Song.deleteMany({});
        //console.log(deleted)
        //let reloading = await db.Artist.insertMany();
        //let tryingSomething = Artist.find({name: testArtist.name})
        //console.log("trying something", tryingSomething)
        Artist.find({name: testArtist.name}, async function (err, allArtists) {
            for (i = 0; i < testSongs.length; i++) {
                testSongs[i].artist = allArtists[0]._id
                //console.log("allArtists", allArtists)
                console.log (testSongs[i])    
            }


            //console.log("newArtist", newArtist)
            await Song.insertMany(testSongs);
        }); 
        
        //Album.find({name: })
       // console.log(reloading)
        //console.log("test", newArtist)
        //testSongs
        //console.log(newArtist._id)
        
    }

    catch (err) {
        console.log(err)
    }
    console.log("created test songs");
}

async function populateAlbums() {
    
    try {
        await Album.deleteMany({});
        Artist.find({name: testArtist.name}, async function (err, allArtists) {
            for (i = 0; i < testSongs.length; i++) {
                for (j = 0; < )
                testSongs[i].album = allArtists[0]._id
                //console.log("allArtists", allArtists)
                console.log (testSongs[i])    
            }


            //console.log("newArtist", newArtist)
            await Song.insertMany(testSongs);
        }); 
    } 

    catch (err) {
        console.log(err)
    }
}

//populateSeedData()

//populateArtist();
populateSongs();