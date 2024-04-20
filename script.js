document.getElementById("questionanswer").style.display = "block";
document.getElementById("answer").style.visibility = "visible";

function myFunction() {
    var x = document.getElementById("#answer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }