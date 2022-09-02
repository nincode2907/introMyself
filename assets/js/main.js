const avatar = document.getElementById("avatar");

avatar.onclick = (e) => window.open(avatar.getAttribute("src"), "_self");
document.addEventListener("contextmenu", e => e.preventDefault());