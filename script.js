const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    startBtn.innerHTML = "Loading Memories... 🌿";

    startBtn.style.transform = "scale(0.95)";

    setTimeout(() => {

        alert("✨ Welcome, Ananya! Your journey begins here... 💚");

        startBtn.innerHTML = "Start Journey 🌿";

        startBtn.style.transform = "scale(1)";

    },1500);

});
