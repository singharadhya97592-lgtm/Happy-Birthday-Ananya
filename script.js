const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document.body.style.transition = "0.8s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.innerHTML = `
        <div class="container">
            <h1>🌿 Chapter One</h1>

            <p class="quote">
                "Every beautiful friendship starts with one hello..."
            </p>

            <button onclick="location.reload()">
                💚 Go Back
            </button>
        </div>
        `;

        document.body.style.opacity = "1";

    },800);

});
