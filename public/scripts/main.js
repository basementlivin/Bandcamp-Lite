console.log(`John Prine rules.`);


// CLICK TO ADD NEW TRACK FIELD: THE DRY VERSION 🌵

const addTrack = document.getElementById("another-new-track");
addTrack.addEventListener('click', addAnotherTrackField)

function addAnotherTrackField() {
    const nextTrack = document.getElementById("another-track-form-field");
    const newTrackField = nextTrack.cloneNode(true);
    console.log(newTrackField.children);

    let newFormArray = Array.from(newTrackField.children);
    console.log(newFormArray);

    let trackClones = newFormArray.slice(0,4)
    console.log(trackClones);

    // let trackClones = newTrackField.children;
    // addAnotherTrack = Array.prototype.trackClones.slice (0, 4);
    // nextTrack.append(addAnotherTrack);
}

// CLICK TO ADD NEW TRACK FIELD: THE SOPPING WET VERSION 💦

// function addAnotherTrackField() {
//     console.log(`U DONE GONE & CLICKED IT`)
//     let nextTrack = document.getElementById("another-track-form-field");
//     let newTrackField = document.createElement('div');
//     newTrackField.innerHTML =
//         `<div class="upload-form-field" id="another-track-form-field">
//             <label for="tracktitle">Track Name</label>
//                 <input class="user-input-field"
//                 type="text"
//                 placeholder="Ride Or Die"
//                 name="tracktitle"
//                 id="tracktitle" 
//                 />
//             <label for="audiofile">Audio File</label>
//                 <input
//                 type="file"
//                 accept="audio/*"
//                 name="audiofile"
//                 id="audiofile"
//                 />
//         </div>`
//     nextTrack.appendChild(newTrackField);
// }



// function convertAudio () {
//     let audio = document.getElementbyID("#audiofile");
//     //change property to the bytestring
//     //so it can be converted to base64 and then the song post req
//     //can save it to the database within the song.audio property
// }