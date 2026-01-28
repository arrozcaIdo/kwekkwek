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
}// Typewriter effect for Valentine text
setTimeout(() => {
  const text = document.createElement("div");
  text.id = "valentine-text";
  document.body.appendChild(text);

  const message = "Will you be my valentine?";
  let i = 0;

  // Blur hearts when typing starts
  const ui = document.getElementById("ui");
  ui.style.filter = "blur(3px) brightness(0.6)";

  function typeWriter() {
    if (i < message.length) {
      text.textContent += message[i];
      i++;
      setTimeout(typeWriter, 120);
    } else {
      // Create Yes/No buttons
      const btnContainer = document.createElement("div");
      btnContainer.id = "valentine-btns";
      btnContainer.style.display = "flex";
      btnContainer.style.justifyContent = "center";
      btnContainer.style.alignItems = "center";

      const yesBtn = document.createElement("button");
      yesBtn.className = "valentine-btn";
      yesBtn.textContent = "Yes";

      const noBtn = document.createElement("button");
      noBtn.className = "valentine-btn";
      noBtn.textContent = "No";

      btnContainer.appendChild(yesBtn);
      btnContainer.appendChild(noBtn);
      document.body.appendChild(btnContainer);

      // Fade in buttons
      requestAnimationFrame(() => {
        btnContainer.style.opacity = 1;
      });

      // Yes button click
      let yesSize = 3; // starting font size in rem
      yesBtn.addEventListener("click", () => alert("hehehehehe i love you baby"));

      // No button hover count
      let hoverCount = 0;
      const messages = ["luh", "???", "di mo na ba ak mahal", "baby naman", "ihhhh", "🙁"];

      function showMessage(msg) {
        const msgDiv = document.createElement("div");
        msgDiv.textContent = msg;
        msgDiv.style.position = "absolute";
        msgDiv.style.top = "40%";
        msgDiv.style.left = "50%";
        msgDiv.style.transform = "translateX(-50%)";
        msgDiv.style.fontFamily = "'Courier New', Courier, monospace";
        msgDiv.style.fontSize = "2rem";
        msgDiv.style.color = "#fff";
        msgDiv.style.textShadow = "0 0 10px #fff, 0 0 20px #ff5fa2";
        msgDiv.style.opacity = 1;
        msgDiv.style.zIndex = 101;
        document.body.appendChild(msgDiv);

        setTimeout(() => {
          msgDiv.style.transition = "opacity 0.8s ease";
          msgDiv.style.opacity = 0;
        }, 1000);

        setTimeout(() => document.body.removeChild(msgDiv), 1800);
      }

      // No button swaps with Yes on hover
      noBtn.addEventListener("mouseenter", () => {
        hoverCount++;

        // After 10 hovers, remove No button and enlarge Yes button
        if (hoverCount > 15) {
          noBtn.style.display = "none";
          yesBtn.style.fontSize = "6rem"; // take up most of the space
          yesBtn.style.width = "80%";
          yesBtn.style.transition = "all 0.5s ease";
          yesBtn.style.textAlign = "center";
          return;
        }

        // Swap flex order
        const yesOrder = yesBtn.style.order || "0";
        const noOrder = noBtn.style.order || "1";
        yesBtn.style.order = noOrder;
        noBtn.style.order = yesOrder;

        // Grow Yes button a little
        yesSize += 0.3;
        yesBtn.style.fontSize = yesSize + "rem";

        // Show random message if hoverCount is odd
        if (hoverCount % 2 === 1) {
          const randomMsg = messages[Math.floor(Math.random() * messages.length)];
          showMessage(randomMsg);
        }
      });
    }
  }

  typeWriter();
}, 2100);
