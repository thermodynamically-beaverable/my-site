document.getElementById("greet").addEventListener("click", () => {
  document.getElementById("message").textContent = "Jesus loves you:)";
});

//playlist: add or remove file names
const playlist = [
  "audio/song.mp3",
  "audio/song1.mp3",
  "audio/song2.mp3",
  "audio/song3.mp3",
  "audio/song4.mp3"
];

let current = 0;

const song = document.getElementById("song");
const playBtn = document.getElementById("play");
const PLAY = "\u25B6\uFE0E";
const PAUSE = "\u275A\u275A";

song.src = playlist[current];

function loadSong(index) {
  current = (index + playlist.length) % playlist.length; // wraps around
  song.src = playlist[current];
  song.play();
}

playBtn.addEventListener("click", () => {
  if (song.paused) {
    song.play();
  } else {
    song.pause();
  }
});

document.getElementById("back").addEventListener("click", () => {
  loadSong(current - 1);
});

document.getElementById("forward").addEventListener("click", () => {
  loadSong(current + 1);
});

// When a song ends, go to the next one automatically
song.addEventListener("ended", () => {
  loadSong(current + 1);
});

song.addEventListener("play", () => { playBtn.textContent = PAUSE; });
song.addEventListener("pause", () => { playBtn.textContent = PLAY; });