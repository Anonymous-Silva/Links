const profileImg = document.getElementById("profile-img");
const overlay = document.getElementById("overlay");
const sound = document.getElementById("sound");

profileImg.addEventListener("click", () => {
  overlay.style.display = "flex";
  sound.play();
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  sound.pause();
  sound.currentTime = 0;
});
