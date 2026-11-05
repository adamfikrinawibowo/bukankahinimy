const envelope = document.getElementById("envelope");
const letterCard = document.getElementById("letterCard");
const closeLetter = document.getElementById("closeLetter");

envelope.addEventListener("click", () => {
  letterCard.classList.add("open");
  letterCard.setAttribute("aria-hidden", "false");
  envelope.style.display = "none";
  letterCard.scrollIntoView({ behavior: "smooth", block: "center" });
});

closeLetter.addEventListener("click", () => {
  letterCard.classList.remove("open");
  letterCard.setAttribute("aria-hidden", "true");
  envelope.style.display = "block";
  envelope.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Hati kecil yang melayang sesekali.
const heartLayer = document.querySelector(".floating-hearts");
const symbols = ["♡", "♥", "୨୧"];
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (12 + Math.random() * 18) + "px";
  const duration = 7 + Math.random() * 6;
  heart.style.animationDuration = duration + "s";
  heartLayer.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 950);
