const quotes = [
  "You’re not just my love, you’re my home. 🏠❤️",
  "Every rep, every ride — I’m cheering for you. 💪🏍️",
  "You’re strong outside, but even stronger in my heart. 💖",
  "Loving you is my favorite workout. 😘",
  "Your smile is the best motivation I need every day. 💫"
];

function newQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[random];
}

let score = 0;
function increaseScore(e) {
  score++;
  document.getElementById("score").innerText = "Hugs Sent: " + score;

  // ❤️ Heart animation
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  const x = e.offsetX;
  const y = e.offsetY;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  e.currentTarget.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);
}

// 🎂 Birthday Countdown
function updateCountdown() {
  const now = new Date();
  const nextBirthday = new Date(now.getFullYear(), 6, 13); // July = 6 (0-based)

  if (now > nextBirthday) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
  }

  const diff = nextBirthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").innerText =
    `${days} days ${hours} hrs ${mins} min ${secs} sec left 🎈`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 🖼️ Slideshow
const slides = [
  { src: "images/us.jpeg", caption: "You and me 💑" },
  { src: "images/bhutu.jpeg", caption: "Keep Smiling 💖" },
  { src: "images/him.jpeg", caption: "You looking cool 😎" },
  { src: "images/body.jpeg", caption: "That strong body 💪🔥" },
  { src: "images/ai.jpeg", caption: "My Hero 💯" },
  { src: "images/hand.jpeg", caption: "Us holding hands 🤝" }
];

let currentSlide = 0;
function updateSlide() {
  const img = document.getElementById("slideshow-image");
  const caption = document.getElementById("caption");
  img.src = slides[currentSlide].src;
  caption.innerText = slides[currentSlide].caption;
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(updateSlide, 3000);
updateSlide();
