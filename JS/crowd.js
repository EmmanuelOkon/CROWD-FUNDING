// GET THE MODAL
var modal = document.getElementById("myModal");

// GET THE MODAL BUTTON
var btn = document.getElementById("projectModalBtn");

// GET THE SPAN ELEMENT THAT CLOSES THE MODAL
var span = document.getElementsByClassName("close")[0];

// OPEN MODAL ON CLICK
btn.onclick = function() {
    modal.style.display = "block";
}

// CLOSE THE MODAL WHEN USER CLICKS THE <span> (x) ELEMENT
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == myModal) {
      modal.style.display = "none";
    }
  }