console.log(`John Prine rules.`);

const addTrack = document.getElementById("another-new-track");
addTrack.addEventListener('click', addAnotherTrackField)

function addAnotherTrackField() {
    console.log(`U DONE GONE & CLICKED IT`)
    let nextTrack = document.getElementById("another-track-form-field");
    let newTrackField = document.createElement('div');
    newTrackField.innerHTML = "<div id='another-track-form-field'><label for='tracktitle'>Track Name</label><input type='text' placeholder='Ride Or Die' name='tracktitle' id='tracktitle'/></div>";
    nextTrack.appendChild(newTrackField);   
}

// function convertAudio () {
//     let audio = document.getElementbyID("#audiofile");
//     //change property to the bytestring
//     //so it can be converted to base64 and then the song post req
//     //can save it to the database within the song.audio property
// }