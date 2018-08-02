// YOUR TASK: Add more pictures!
var pictures = ['./imgs/Cleveland_Cavaliers.jpg', './imgs/Dallas_Mavericks.jpg', './imgs/miami_heat.jpg', './imgs/golden-state.jpg'];
var currentIndex = 0;
var pic = document.getElementById("picture");


pic.addEventListener("click", function showNextPicture() {
  currentIndex++; // increment current picture
  // if currentIndex is too large, start from the beginning again
  if (currentIndex >= pictures.length) {
    currentIndex = 0;
  }
  pic.src = pictures[currentIndex];

  // YOUR TASK: Finish this function!
});




























