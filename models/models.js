const artistSchema = new Schema ({
    /*
    name: {type: String, required: true},
    members: [{String}],
    bio: {String},
    yearFormed: {Number}, //** new Date?
    location: {String} //*
    active: {Boolean, default: true},
    // albums: [{String}], //*
    // songs: [{String}], //*
    // genre: [{String}], //*
    profilePicture: {String}, //URL to cover photo asset
    //* place for media uploads? array of images? 
    */
})

const albumSchema = new Schema ({
    /*
    title: {type String, required: true},
    artist: {String} * default to artist of page
    tracks: [{String}] *
    albumart: {type: String} //URL to cover art asset
    year: {Number}
    genre: [{String}]
    */
})

const songSchema = new Schema ({
    /*
    title: {type: String, required: true},
    audio: {type: String} //URL to audio assett in database 
    artist: {String} * default to artist of page
    album: [{type: String, default: "none/single/etc"*}] //*  
    length? //*check out timestamp formatting

    */
})


const Artist = mongoose.model("Artist", artistSchema)
const Album = mongoose.model("Album", albumSchema)
const Song = mongoose.model("Song", songSchema)
module.exports = [
    {Artist},
    {Album},
    {Song}
] // return to this lol