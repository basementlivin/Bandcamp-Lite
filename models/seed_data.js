const mongoose = require('mongoose');
const { default: test } = require('node:test');

require('../config/db.connection')

const Models = require('./models.js')
const Artist = Models.Artist
const Album = Models.Album
const Song = Models.Song

//console.log ({Artist: Artist})

let newArtist = {}
// collection = [[artist a, artist b, artist c],[[albums a],[albums b],[albums c]],[[[tracklists a^]],[[tracklistsb^]], [[tracklistsc^]]]]]

const collection = [
    [
        {
            type: "Artist",
            name: "Radiohead",
            members: ["Thom Yorke", 'Jonny Greenwood', 'Colin Greenwood', "Ed O'brien", "Phil Selway"],            bio: "i like em",
            yearFormed: 1985, //** new Date?
            location: "Abingdon, Oxfordshire", //*
            active: true,
            discography: {
                albums: [], //*
                songs: [] //
            },
            genre: ["Rock", "Electronic", "Experimental"], //* push genre from all songs ?
            profilePicture: "https://cdn.mos.cms.futurecdn.net/QyuRpsE7sBno5atYkzHK43-1920-80.jpg.webp", //URL to cover photo asset
        },
        { //next artist
            type: "Artist",
            name: "Bjork"
        },
        // { //next artist
        //     type: "Artist",
        //     name: ""
        // },
        //End of Artists array
        //End of Artists array
    ],      
    [
        //Beginning of Albums array (each sub array corresponds to an artist from above)
        [{   
            type: "Album",        
            title: "OK Computer",
            albumart: "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png", //URL to cover art asset
            year: 1997,
            genre: ["Rock", "Experimental"]
        }
        // {  //next album for this artist
        //     type: "Album",
        //     title: ""
        // },
        ],
        [{ //first album for next artist
            type: "Album",
            title: "Homogenic"
        },
        ],
        // [{ //first album for next artist
        // // {
        // //     type: "Album",
        // //     title: ""
        // // },
        // }],
        //End of Albums array
    ],  
    [
        //Beginning of Songs array. Each layer groups the songs 
        // [[[artist1album1songs][artist1album2songs]],[[artist2album1songs][artist2album2songs]]]
        [ //artist 1
            [{ //album1                
                type: "Song",
                title: "Airbag",
                //audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Paranoid Android",
                //audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Subterrenean Homesick Alien",
                //audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Exit Music (For a Film)",
                //audio: "", //URL to audio assett in database                    
            },{
                type: "Song",
                title: "Let Down",
                //audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Karma Police",
                //audio: "", //URL to audio assett in database
            },{
                type: "Song",
                title: "Fitter Happier",
                //audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Electioneering",
                //audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Climbing Up the Walls",
                // audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "No Surprises",
                // audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "Lucky",
                // audio: "", //URL to audio assett in database 
            },{
                type: "Song",
                title: "The Tourist",
                // audio: "", //URL to audio assett in database 
            }],
            // [{ //album 2
            //type: "Song",
            //title: "",
            // audio: "", //URL to audio assett in database         
            // },],

        ],
        [ //artist 2
            [ //album 1
                { //songs
                    type: "Song",
                    title: "Hunter",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "Joga",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "Unravel",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "Bachelorette",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "All Neon Like",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "5 Years",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "Immature",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "Alarm Call",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "Pluto",
                    // audio: "", //URL to audio assett in database  
                },{ 
                    type: "Song",
                    title: "All is Full of Love",
                    // audio: "", //URL to audio assett in database  
                },
            ], //[next album{}]
        ]
        //[next artist{}]
        //end of songs
    ]  
]
///------------------------///

///---Creating test data functions---///

///------------------------///

async function createArtist(seed) {
    try {
        let createdArtist = await Artist.create( seed );
        //console.log(accountArtist)
        return createdArtist;
    } catch (err) {
        console.log(err)
    }
}

async function createAlbum(seed , val) {
    try {
        seed.artist = val
        let createdAlbum = await Album.create(seed)
        return createdAlbum
    } catch (err) {
        console.log(err)
    }
}

async function createSongs (seedArray, val, val2) {
    try {
        seedArray.forEach(seed => {
            seed.artist = val
            seed.album = val2
        })
        createdSongs = await Song.insertMany(seedArray); 
        return createdSongs       
    } catch (err) {
        console.log(err)
    }
}

async function updateArtist ( a, b, c ) {
    try {
        let tempDiscog = a.discography
        //console.log("temp test", b._id)
        tempDiscog.albums.push(b._id)
        for (q =0 ; q < c.length; q++) {
            tempDiscog.songs.push(c[q]._id)
        }
        await console.log("final temp discog", tempDiscog)
        await Artist.findByIdAndUpdate(a._id, {discography: tempDiscog})
    } catch (err) {
        console.log(err)
    }
}

async function updateAlbum ( b , c ) {
    try {
        let tempTracks = b.tracks
        //let tempGenre = b.genre
        for (r = 0 ; r < c.length; r++) {
            tempTracks.push(c[r]._id)
            //tempGenre.push(c[i].genre[j] if its not in there)
        }
        await Album.findByIdAndUpdate(b._id, {tracks: tempTracks})
        await console.log("updateAlbum complete")
    } catch (err) {
        console.log(err)
    }
}

async function clearDB() {
    await Artist.deleteMany();
    await Album.deleteMany();
    await Song.deleteMany();
}

//populateSeedData();
async function playGod (collection) {
    await clearDB();
    let artist
    let album
    let songs
    for (x = 0; x < collection[0].length; x++) {
        artist = await createArtist(collection[0][x]); 
        for (j = 0; j < collection[1][x].length; j++) {
            let album = await createAlbum(collection[1][x][j], artist._id)
            let songs = await createSongs(collection[2][x][j], artist._id, album._id)
            await updateArtist (artist, album, songs)
            await updateAlbum (album, songs)
        }
        
    }
    mongoose.connection.close();
}


playGod(collection);