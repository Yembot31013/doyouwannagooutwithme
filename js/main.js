document.getElementById("yesButton").addEventListener("mouseover", (e) => {
  var hoverSound = document.getElementById("yesHoverSound");
  hoverSound.currentTime = 0; // Rewind the sound to the beginning
  hoverSound.play();
});

function nextPage() {
  var hoverSound = document.getElementById("clickedSound");
  hoverSound.currentTime = 0; // Rewind the sound to the beginning
  hoverSound.play();

  window.location.href = "yes.html";
}

function moveButton() {
  var x =
    Math.random() *
    (window.innerWidth - document.getElementById("noButton").offsetWidth);
  var y =
    Math.random() *
    (window.innerHeight - document.getElementById("noButton").offsetHeight);
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;

  // Play the sound
  var hoverSound = document.getElementById("noHoverSound");
  hoverSound.currentTime = 0; // Rewind the sound to the beginning
  hoverSound.play();
  // Play the sound
}
