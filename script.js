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

new QRCode(document.getElementById("qrcode"), {
  text: "https://youtube.com/@passeiosdevoge?si=Bp5PfWgjP2MQIqxB",
  width: 150,
  height: 150,
  colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
});

const music = new Audio("rock.mp3");
music.loop = true;
let isPlaying = false;

const toggleBtn = document.getElementById("toggleMusic");

toggleBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    toggleBtn.textContent = "🔇 Desativar música ambiente";
  } else {
    music.pause();
    toggleBtn.textContent = "🔊 Ativar música ambiente";
  }
  isPlaying = !isPlaying;
});

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;
  const layer = document.getElementById("parallax-layer");
  const moveX = x * 30; // sensibilidade horizontal
  const moveY = y * 30; // sensibilidade vertical
  layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
