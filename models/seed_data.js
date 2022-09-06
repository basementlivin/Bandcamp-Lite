const mongoose = require('mongoose');
const { default: test } = require('node:test');

require('../config/db.connection')

const Models = require('./models.js')
const Artist = Models.Artist
const Album = Models.Album
const Song = Models.Song

// collection = [[artist a, artist b, artist c],[[albums a],[albums b],[albums c]],[[[tracklists a^]],[[tracklistsb^]], [[tracklistsc^]]]]]
const collection = [
    [   
        {
            type: "Artist",
            name: "Radiohead",
            members: ["Thom Yorke", 'Jonny Greenwood', 'Colin Greenwood', "Ed O'brien", "Phil Selway"],            
            bio: "i like em",
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
        { //next artist
            type: "Artist",
            name: "Modest Mouse"
        },
        { //next artist
            type: "Artist",
            name: "My Bloody Valentine"
        },
        { //next artist
            type: "Artist",
            name: "Cocteau Twins"
        },
        { //next artist
            type: "Artist",
            name: "Aphex Twin"
        },
        { //next artist
            type: "Artist",
            name: "Sufjan Stevens"
        },
        // { //next artist
        //     type: "Artist",
        //     name: ""
        // },
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
        [{ //first album for next artist - Bjork
            type: "Album",
            title: "Homogenic",
            albumart: "https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png",
            year: 1997,
            genre: ["Electronica", "Trip Hop", "Glitch","Art Pop", "Experimental",]
        },
        ],
        [{ //first album for next artist - Modest Mouse  
            type: "Album",
            title: "The Moon & Antarctica",
            albumart: "https://upload.wikimedia.org/wikipedia/en/0/00/TheMoonAntarctica.jpg"
        },
        // {  //next album for this artist
        //     type: "Album",
        //     title: ""
        // }
        ],
        [{ //first album for next artist  - My Bloody Valentine   
            type: "Album",
            title: "Loveless",
            albumart: "https://upload.wikimedia.org/wikipedia/en/4/4b/My_Bloody_Valentine_-_Loveless.png"
        // },
        // {  //next album for this artist
        //     type: "Album",
        //     title: ""
        }],
        [{ //first album for next artist  - Cocteau Twins   
            type: "Album",
            title: "Heaven or Las Vegas",
            albumart: "https://upload.wikimedia.org/wikipedia/en/6/60/Cocteau_Twins%E2%80%94Heaven_or_Las_Vegas.jpg"
        // },
        // {  //next album for this artist
        //     type: "Album",
        //     title: ""
        }],
        [{ //first album for next artist  - Aphex Twin   
            type: "Album",
            title: "druQks",
            albumart: "https://upload.wikimedia.org/wikipedia/en/f/f0/Drukqs_%28Front_Cover%29.png"
        // },
        // {  //next album for this artist
        //     type: "Album",
        //     title: ""
        }],
        [{ //first album for next artist  - Sufjan Stevens   
            type: "Album",
            title: "Age of Adz",
            albumart: "https://upload.wikimedia.org/wikipedia/en/e/e9/Sufjanstevensageofadz.jpg"
        // },
        // {  //next album for this artist
        //     type: "Album",
        //     title: ""
        }],
        //End of Albums array
    ],  
    [
        //Beginning of Songs array.
        // [[[artist1album1songs][artist1album2songs],...],[[artist2album1songs][artist2album2songs]],...]
        [ //artist 1 - Radiohead
            [
                { //album1                
                    type: "Song",
                    title: "Airbag",
                },{
                    type: "Song",
                    title: "Paranoid Android",
                },{
                    type: "Song",
                    title: "Subterrenean Homesick Alien",
                },{
                    type: "Song",
                    title: "Exit Music (For a Film)",
                },{
                    type: "Song",
                    title: "Let Down",
                },{
                    type: "Song",
                    title: "Karma Police",
                },{
                    type: "Song",
                    title: "Fitter Happier",
                },{
                    type: "Song",
                    title: "Electioneering",
                },{
                    type: "Song",
                    title: "Climbing Up the Walls",
                },{
                    type: "Song",
                    title: "No Surprises",
                },{
                    type: "Song",
                    title: "Lucky",
                },{
                    type: "Song",
                    title: "The Tourist",
                }],
            // [{ //album 2
            //type: "Song",
            //title: "",
                     
            // },],
        ],
        [ //artist 2 - Bjork
            [ //album 1
                { //songs
                    type: "Song",
                    title: "Hunter",
                },{ 
                    type: "Song",
                    title: "Joga",
                },{ 
                    type: "Song",
                    title: "Unravel",
                },{ 
                    type: "Song",
                    title: "Bachelorette",
                },{ 
                    type: "Song",
                    title: "All Neon Like",
                },{ 
                    type: "Song",
                    title: "5 Years",
                },{ 
                    type: "Song",
                    title: "Immature",
                },{ 
                    type: "Song",
                    title: "Alarm Call",
                },{ 
                    type: "Song",
                    title: "Pluto",
                },{ 
                    type: "Song",
                    title: "All is Full of Love",
                },
            ], //[next album{}]
        ],
        [//next artist - Modest Mouse
            [//album 1
                { 
                    type: "Song",
                    title: "3rd Planet"
                },{
                    type: "Song",
                    title: "Gravity Rides Everything"
                },{
                    type: "Song",
                    title: "Dark Center of the Universe"
                },{
                    type: "Song",
                    title: "Perfect Disguise"
                },{
                    type: "Song",
                    title: "Tiny Cities Made of Ashes"
                },{
                    type: "Song",
                    title: "A Different City"
                },{
                    type: "Song",
                    title: "The Cold Part"
                },{
                    type: "Song",
                    title: "Alone Down There"
                },{
                    type: "Song",
                    title: "The Stars Are Projectors"
                },{
                    type: "Song",
                    title: "Wild Packs of Family Dogs"
                },{
                    type: "Song",
                    title: "I Came as a Rat"
                },{
                    type: "Song",
                    title: "Lives"
                },{
                    type: "Song",
                    title: "Life Like Weeds"
                },{
                    type: "Song",
                    title: "What People Are Made Of"
                },
            ],
            //  [ next album
            //      { 
            //           type: "Song",
            //           title: ""
            //      },
            //  ],
        ],
        [//next artist MBV
            [//album 1 - Loveless
                { 
                    type: "Song",
                    title: "Only Shallow"
                },{
                    type: "Song",
                    title: "Loomer"
                },{
                    type: "Song",
                    title: "Touched (instrumental)"
                },{
                    type: "Song",
                    title: "To Here Knows When"
                },{
                    type: "Song",
                    title: "When You Sleep"
                },{
                    type: "Song",
                    title: "I Only Said"
                },{
                    type: "Song",
                    title: "Come in Alone"
                },{
                    type: "Song",
                    title: "Sometimes"
                },{
                    type: "Song",
                    title: "Blown a Wish"
                },{
                    type: "Song",
                    title: "What you Want"
                },{
                    type: "Song",
                    title: "Soon"
                }
            ],
        //  [ next album
        //      { 
        //           type: "Song",
        //           title: ""
        //      },
        //  ],
        ],
        [//next artist - Cocteau Twins
            [//album 1 - Heaven or Las Vegas
                { 
                    type: "Song",
                    title: "Cherry-Coloured Funk"
                },{ 
                    type: "Song",
                    title: "Pitch the Baby"
                },{ 
                    type: "Song",
                    title: "Iceblink Luck"
                },{ 
                    type: "Song",
                    title: "Fifty-Fifty Clown"
                },{ 
                    type: "Song",
                    title: "Heaven or Las Vegas"
                },{ 
                    type: "Song",
                    title: "I Wear Your RIng"
                },{ 
                    type: "Song",
                    title: "Fotzepolitic"
                },{ 
                    type: "Song",
                    title: "Wolf in the Breast"
                },{ 
                    type: "Song",
                    title: "Road, River and Rail"
                },{ 
                    type: "Song",
                    title: "Frou-Frou Foxes in Midsumer Fires"
                },
            ],
        //  [ next album
        //      { 
        //           type: "Song",
        //           title: ""
        //      },
        //  ],
        ],
        [//next artist - Aphex Twin
            [//album 1
                { 
                    type: "Song",
                    title: "Jynweythek"
                },{ 
                    type: "Song",
                    title: "Vordhosbn"
                },{ 
                    type: "Song",
                    title: "Kladfvgbung Micshk"
                },{ 
                    type: "Song",
                    title: "Omgyjya-Switch7"
                },{ 
                    type: "Song",
                    title: "Strotha Tynhe"
                },{ 
                    type: "Song",
                    title: "Gwely Mernans"
                },{ 
                    type: "Song",
                    title: "Bbydhyonchord"
                },{ 
                    type: "Song",
                    title: "Cock/Ver10"
                },{ 
                    type: "Song",
                    title: "Avril 14th"
                },{ 
                    type: "Song",
                    title: "Mt Saint Michel + Saint Michaels Mount"
                },{ 
                    type: "Song",
                    title: "Gwarek2"
                },{ 
                    type: "Song",
                    title: "Orban Eq Trx 4",
                },{ 
                    type: "Song",
                    title: "Aussois",
                },{ 
                    type: "Song",
                    title: "Hy a Scullyas Lyf Adhagrow",
                },{ 
                    type: "Song",
                    title: "Kesson Dalek",
                },
            ],
        //  [ next album
        //      { 
        //           type: "Song",
        //           title: ""
        //      },
        //  ],
        ],
        [//next artist Sufjan Steven
            [//album 1
                { 
                    type: "Song",
                    title: "Futile Devices"
                },{ 
                    type: "Song",
                    title: "Too Much"
                },{ 
                    type: "Song",
                    title: "Age of Adz"
                },{ 
                    type: "Song",
                    title: "I Walked"
                },{ 
                    type: "Song",
                    title: "Now That I'm Older"
                },{ 
                    type: "Song",
                    title: "Get Real Get Right"
                },{ 
                    type: "Song",
                    title: "Bad Communication"
                },{ 
                    type: "Song",
                    title: "Vesuvius"
                },{ 
                    type: "Song",
                    title: "All for Myself"
                },{ 
                    type: "Song",
                    title: "I Want to Be Well"
                },{ 
                    type: "Song",
                    title: "Impossible Soul"
                },
            ],
        //  [//next album
        //      { 
        //           type: "Song",
        //           title: ""
        //      },
        //  ],
        ],
        //[next artist catalogue 
        //  [album 1
        //      { 
        //           type: "Song",
        //           title: ""
        //      },
        //  ],
        //  [ next album
        //      { 
        //           type: "Song",
        //           title: ""
        //      },
        //  ],
        //],
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
            //seed.audio = "put base64 encoded string here to test sample audio"
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

async function reseedDatabase (collection) {
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

reseedDatabase(collection)