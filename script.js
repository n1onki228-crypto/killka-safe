const openBtn = document.getElementById("openBtn");
const message = document.getElementById("message");

openBtn.addEventListener("click", function () {
    message.style.display = "block";
    openBtn.style.display = "none";
});