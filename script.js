// Fundo de estrelas animadas
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    speed: Math.random() * 0.5 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#ffffff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
  moveStars();
}

const text = "Passeios de Voge";
let i = 0;

function typeText() {
  if (i < text.length) {
    document.querySelector(".typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}
window.onload = typeText;

function moveStars() {
  stars.forEach(star => {
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  });
}

setInterval(drawStars, 33);

// Efeito ao clicar na imagem
const profile = document.getElementById("profile-img");
const overlay = document.getElementById("overlay");
const sound = document.getElementById("sound");

profile.addEventListener("click", () => {
  overlay.style.display = "flex";
  sound.play();
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const link = "https://youtube.com/@passeiosdevoge?si=Bp5PfWgjP2MQIqxB";
  navigator.clipboard.writeText(link).then(() => {
    const msg = document.getElementById("copyMsg");
    msg.style.display = "inline";
    setTimeout(() => msg.style.display = "none", 2000);
  });
});
