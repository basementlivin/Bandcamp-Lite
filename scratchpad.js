

//

let buffer = Buffer.from('hello')
let string64 = buffer.toString('base64')

//console.log (buffer)
//console.log (string64)

let string64A = Buffer.from('hello').toString('base64')

//console.log (string64A)
let test = "I really want to fucking solve this problem"
btoa(test)
let result = btoa("I really want to fucking solve this problem");
atob(result)
let decode = atob(result)
console.log(result)
console.log(decode)

///////shit from main.js

    // const decodedAudio = function (context.audio) {
    //      let binary = atob(context.audio)
    //          console.log(binary) 
    //          let buffer = new ArrayBuffer(binary.length) 
    //          console.log(buffer) 
    //          let bytes = new Uint8Array(buffer)
    //          for (i = 0; i < buffer.byteLength; i++) { 
    //          bytes[i] = binary.charCodeAt(i) & 0xFF; 
    //          }
    //          console.log("new buffer", buffer)
    // }
    //  let buffer

    // function initSound(arrayBuffer) {
    //     //var base64String = bufferToBase64(arrayBuffer);
    //     //var audioFromString = base64ToBuffer(base64String);

    //     document.getElementById("encodedResult").value = base64String;
    //     context.decodeAudioData(audioFromString, function (buffer) {
    //         audioBuffer = buffer;
    //         let buttons = document.querySelectorAll('button');
    //         buttons[0].disabled = false;
    //         buttons[1].disabled = false;
    //     }, function (e) {
    //         console.log('Error decoding file', e)
    //     })
    // }

    // function playSound() {
    //     // source is global so we can call .stop() later.
    //     source = context.createBufferSource();
    //     source.buffer = audioBuffer;
    //     source.loop = false;
    //     source.connect(context.destination);
    //     source.start(0); // Play immediately.
    // }
    // // function convertAudio () {
    // //     let audio = context.decodeAudioData()
    // //     //change property to the bytestring
    // //     //so it can be converted to base64 and then the song post req
    // //     //can save it to the database within the song.audio property
    // // }

    // /////
    // async function initAudioBuffer() {
    //     const data_buf = context.audio
    //     const audio_buf = await audio_ctx.decodeAudioData( data_buf );
    //     button.onclick = (evt) => {
    //     const source = audio_ctx.createBufferSource();
    //     source.buffer = audio_buf;
    //     source.connect( audio_ctx.destination );
    //     source.start( 0 );
    //     };
    //     button.textContent = "play audio buffer";
    // }
    
    // button.onclick = (evt) => {
    //     initMediaElementNode();
    //     initAudioBuffer();
    // };
    
    // function dataURLToArrayBuffer( data_url ) {
    //     const byte_string = atob( data_url.split( ',' )[ 1 ] );
    //     return Uint8Array.from(
    //     { length: byte_string.length },
    //     (_, i) => byte_string.charCodeAt(i)
    //     ).buffer;
    // }

    // /// 


/////shit from the show page

// <!-- <% let binary = atob(context.audio) %> -->
//         <!-- <% console.log(binary) %> -->
//         <!-- <% let buffer = new ArrayBuffer(binary.length) %> -->
//         <!-- <% console.log(buffer) %> -->
//         <!-- <% let bytes = new Uint8Array(buffer) %> -->
//         <!-- <% for (i = 0; i < buffer.byteLength; i++) { %> -->
//         <!-- <% bytes[i] = binary.charCodeAt(i) & 0xFF; %> -->
//         <!-- <% } %> -->
//         <!-- <% console.log("new buffer", buffer)%> -->
//         <!-- <% initAudioBuffer() %> -->
