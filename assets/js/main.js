import * as Particles from "./particles.js"
import vansta from "./vanta_bird.js"

const avatar = document.getElementById("avatar");
const background = document.getElementById("particles-js")

//open avatar in current tab
avatar.onclick = (e) => window.open(avatar.getAttribute("src"), "_self");

//cancel open devtool with right mouse
document.addEventListener("contextmenu", e => e.preventDefault());

//display animation with day
const d = new Date();
let day = d.getDay();

if (day % 3 == 0) {
    VANTA.BIRDS(vansta);
} else {
    particlesJS("particles-js", (day % 3 == 1) ? Particles.polygon : Particles.snow);
}

//play music
const music = document.querySelector(".music");
const song = document.getElementById("song");
music.addEventListener("click", () => {
    if (music.classList.contains("music--playing")) {
        music.classList.remove("music--playing");
        song.pause();
    } else {
        music.classList.add("music--playing");
        song.play();
    }
})

song.addEventListener("ended", () => {
    music.classList.remove("music--playing");
})