const fronttext = document.getElementById("fronttext");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    fronttext.style.backgroundPositionY = offset * 2 + "px";
})