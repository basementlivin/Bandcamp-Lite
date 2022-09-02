console.log(`John Prine rules.`);

const addAnotherTrack = document.getElementById("another-new-track");
const newTrackField = document.createElement("div");
newTrackField.setAttribute("class", "another-track-form-field");

addAnotherTrack.addEventListener('click', (e) => {
    console.log(`EVENT LISTENING!`)
})
