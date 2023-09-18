import * as Particles from "./particles.js"
import vansta from "./vanta_bird.js"

const avatar = document.getElementById("avatar");
const music = document.querySelector(".music");
const intro = document.querySelector('.intro')
const sound = new Howl({
    src: "./assets/music/gia_cung_nhau_la_duoc.mp3",
});

//open avatar in current tab
avatar.onclick = (e) => window.open(avatar.getAttribute("src"), "_self");


//cancel open devtool with right mouse
document.addEventListener("contextmenu", e => e.preventDefault());

//display animation with day
const d = new Date();
let day = d.getDate();

if (day % 0 == 0) {
    VANTA.BIRDS(vansta);
} else {
    particlesJS("particles-js", (day % 3 == 1) ? Particles.polygon : Particles.snow);
}

//play music
music.addEventListener("click", () => {
    if (music.classList.contains("music--playing")) {
        music.classList.remove("music--playing");
        sound.pause();
    } else {
        music.classList.add("music--playing");
        sound.play();
    }
})

sound.on('end', () => music.classList.remove("music--playing"));

//intro
window.addEventListener("load", function () {
    setTimeout(function () {
        intro.style.display = "none"
    }, 3000)
})
