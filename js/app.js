// on click event make page play sound  //
// var x = document.getElementById("myAudio");
//
// function playAudio() {
//     x.play();
// }
//
// function pauseAudio() {
//     x.pause();
// }

$(document).ready(function () {
  RunSetup();
});

function RunSetup() {
  $(".audioButton").on("click", function (event) {
    audios = {
      "sospBtn": $("#sospCall")[0],
      "other": "aoasfd"
    };

    var myAudio = audios[event.target.id];
    if (myAudio.paused) {
      myAudio.play();
    }
    else {
      myAudio.pause();
    }
  })
}
