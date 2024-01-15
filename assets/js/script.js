
/*
function openModal(image) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
  
    modal.style.display = "block";
    modalImg.src = image.src;
    captionText.innerHTML
  = image.alt;
  }
  
  function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
  }
  
  document.addEventListener('DOMContentLoaded', function() {
  // No need for the image.onclick part in the original script
  // The openModal function is directly called from HTML now
  });

  */

// Get the modal
var modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var images = document.getElementsByClassName('game-thumb');

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.children[0].src;
    captionText.innerHTML = this.children[0].alt;
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    modal.style.display = "none";
  }