// MATRIX RAIN BACKGROUND

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// fullscreen canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// characters used in rain
const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;

// number of columns
const columns = Math.floor(canvas.width / fontSize);

// drop positions
const drops = [];

for (let i = 0; i < columns; i++) {
    drops[i] = Math.floor(Math.random() * canvas.height / fontSize);
}


// draw animation
function drawMatrix() {

    // fade background
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff9c";
    ctx.font = fontSize + "px 'Share Tech Mono', monospace";

    for (let i = 0; i < drops.length; i++) {

        const text = letters.charAt(Math.floor(Math.random() * letters.length));

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        drops[i]++;

        // reset drop randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

    }

}

// animation loop
setInterval(drawMatrix, 33);


// resize handling
window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});
