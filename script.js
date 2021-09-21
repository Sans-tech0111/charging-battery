var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementsByClassName("fill");
    var width = 1;
    var id = setInterval(frame, 35);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        document.getElementById("percentage").innerHTML = width + "%";
      }
    }
  }
}

setTimeout(move, 900);
