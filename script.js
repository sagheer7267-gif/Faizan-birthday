const intro = document.getElementById("intro");
const openBtn = document.getElementById("openBtn");

const mainContent = document.getElementById("mainContent");

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

const emojiRain = document.getElementById("emojiRain");

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeViewer = document.getElementById("closeViewer");


// ==========================
// OPEN SURPRISE
// ==========================

openBtn.addEventListener("click", () => {

  intro.style.transition = "opacity 1s ease";
  intro.style.opacity = "0";

  setTimeout(() => {

    intro.style.display = "none";

    mainContent.classList.remove("hidden");

    window.scrollTo(0, 0);

    startEmojiRain();

    music.play()
      .then(() => {

        musicBtn.textContent = "🎵 Music Playing";

      })
      .catch(() => {

        musicBtn.textContent = "🎵 Play Music";

      });

  }, 1000);

});


// ==========================
// MUSIC
// ==========================

musicBtn.addEventListener("click", () => {

  if (music.paused) {

    music.play()
      .then(() => {

        musicBtn.textContent = "🎵 Music Playing";

      })
      .catch(() => {

        alert(
          "Music play nahi ho rahi. Check karo ke music.mp3 same folder mein hai."
        );

      });

  } else {

    music.pause();

    musicBtn.textContent = "🎵 Play Music";

  }

});


// ==========================
// MOVING EMOJI RAIN
// ==========================

function startEmojiRain() {

  const emojis = [
    "❤️",
    "💕",
    "🎉",
    "✨",
    "🎈",
    "🥳",
    "🎂",
    "💖",
    "⭐",
    "🎁"
  ];

  setInterval(() => {

    const emoji = document.createElement("div");

    emoji.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    emoji.style.position = "fixed";

    emoji.style.left =
      Math.random() * 100 + "vw";

    emoji.style.top = "-40px";

    emoji.style.fontSize =
      (15 + Math.random() * 22) + "px";

    emoji.style.zIndex = "8000";

    emoji.style.pointerEvents = "none";

    emoji.style.transition =
      "transform 5s linear, opacity 5s linear";

    emojiRain.appendChild(emoji);

    requestAnimationFrame(() => {

      emoji.style.transform =
        `translateY(110vh) rotate(${Math.random() * 720}deg)`;

      emoji.style.opacity = "0";

    });

    setTimeout(() => {

      emoji.remove();

    }, 5200);

  }, 650);

}


// ==========================
// PHOTO VIEWER
// ==========================

const photos = document.querySelectorAll(".memory img, .main-photo-card img");

photos.forEach((photo) => {

  photo.addEventListener("click", () => {

    viewerImage.src = photo.src;

    viewer.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


// ==========================
// CLOSE PHOTO VIEWER
// ==========================

function closePhotoViewer() {

  viewer.classList.remove("active");

  viewerImage.src = "";

  document.body.style.overflow = "";

}

closeViewer.addEventListener(
  "click",
  closePhotoViewer
);


viewer.addEventListener("click", (event) => {

  if (event.target === viewer) {

    closePhotoViewer();

  }

});


// ==========================
// ESCAPE
// ==========================

document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {

    closePhotoViewer();

  }

});