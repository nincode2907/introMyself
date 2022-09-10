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