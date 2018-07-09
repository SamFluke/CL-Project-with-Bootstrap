
$(document).ready(function () {
  RunSetup();
});

function RunSetup() {
  $(".audioButton").on("click", function (event) {
    audios = {
      "sospBtn": $("#sospCall")[0],
      "yewaBtn": $("#yewaCall")[0],
      "modoBtn": $("#modoCall")[0],
      "grheBtn": $("#grheCall")[0],
      "killBtn": $("#killCall")[0],
      "pbgrBTN": $("#pbgrCall")[0],
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
