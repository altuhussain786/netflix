(function() {
	
  document.getElementById("questionanswer").style.display = "block";
  document.getElementById("answer").style.visibility = "visible";
  
  var elements = document.getElementsByClassName("questionbutton");
  
  function myFunction(event) {
      var x = event.target.parentNode.parentNode.nextElementSibling;
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    
    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', myFunction, false);
  }
    
    })();