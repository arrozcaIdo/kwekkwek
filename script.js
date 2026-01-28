const N = 100; // number of "I love you"
const ui = document.getElementById("ui");

for (let i = 1; i <= N; i++) {
  const love = document.createElement("div");
  love.className = "love";
  love.style.setProperty("--i", i);

  const h = document.createElement("div");
  h.className = "love_horizontal";

  const v = document.createElement("div");
  v.className = "love_vertical";

  const word = document.createElement("div");
  word.className = "love_word";
  word.textContent = "I love you";

  v.appendChild(word);
  h.appendChild(v);
  love.appendChild(h);
  ui.appendChild(love);
}

// Typewriter effect for Valentine text
setTimeout(() => {
  const text = document.createElement("div");
  text.id = "valentine-text";
  document.body.appendChild(text);

  const message = "Will you be my valentine?";
  let i = 0;

  // Blur hearts immediately when typing starts
  const ui = document.getElementById("ui");
  ui.style.filter = "blur(3px) brightness(0.6)";

  function typeWriter() {
    if (i < message.length) {
      text.textContent += message[i];
      i++;
      setTimeout(typeWriter, 120); // typing speed
    }
  }

  typeWriter();
}, 2100); // after hearts fade-in
