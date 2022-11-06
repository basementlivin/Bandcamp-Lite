console.log(`John Prine rules.`);


// CLICK TO ADD NEW TRACK FIELD: THE DRY VERSION 🌵

const addTrack = document.getElementById("another-new-track");
addTrack.addEventListener('click', addAnotherTrackField)

function addAnotherTrackField() {
    const nextTrack = document.getElementById("another-track-form-field");
    const newTrackField = nextTrack.cloneNode(true);
    nextTrack.id = "dynamically-added-track";
    nextTrack.insertAdjacentElement("afterend", newTrackField);
}

// GIVE THIS FUNCTION SOME LOTION, MAN!


// function convertAudio () {
//     let audio = document.getElementbyID("#audiofile");
//     //change property to the bytestring
//     //so it can be converted to base64 and then the song post req
//     //can save it to the database within the song.audio property
// }