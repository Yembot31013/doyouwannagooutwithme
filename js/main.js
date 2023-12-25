const noAudio = new Audio("audio/no.wav");
const yesAudio = new Audio("audio/yes.wav");

document.getElementById("yesButton").addEventListener("mouseover", (e) => {
  yesAudio.play();
});

function nextPage() {
  window.location.href = "yes.html";
}

function moveButton() {
  noAudio.play();
  
  var x =
    Math.random() *
      (window.innerWidth - document.getElementById("noButton").offsetWidth) -
    85;
  var y =
    Math.random() *
      (window.innerHeight - document.getElementById("noButton").offsetHeight) -
    48;
  document.getElementById("noButton").style.left = `${x}px`;
  document.getElementById("noButton").style.top = `${y}px`;
}
