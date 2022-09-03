console.log(`John Prine rules.`);

const addTrack = document.getElementById("another-new-track");
addTrack.addEventListener('click', addAnotherTrackField)

function addAnotherTrackField() {
    console.log(`U DONE GONE & CLICKED IT`)
    let nextTrack = document.getElementById("another-track-form-field");
    let newTrackField = document.createElement('div');
    newTrackField.innerHTML =
        `<div class="upload-form-field" id="another-track-form-field">
            <label for="tracktitle">Track Name</label>
                <input
                type="text"
                placeholder="Ride Or Die"
                name="tracktitle"
                id="tracktitle" 
                />
            <label for="audiofile">Audio File</label>
                <input
                type="file"
                accept="audio/*"
                name="audiofile"
                id="audiofile"
                />
        </div>`
    nextTrack.appendChild(newTrackField);   
}