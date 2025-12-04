const title = document.getElementById("title");
const button = document.getElementById("animateButton");

let angle = 0;
let animationId = null;

function animateTitle() {
    angle += 2;

    const offset = Math.sin((angle * Math.PI) / 180) * 10;
    title.style.transform = `translateY(${offset}px)`;

    const red = Math.floor(128 + 127 * Math.sin((angle * Math.PI) / 180));
    const green = Math.floor(128 + 127 * Math.sin(((angle + 120) * Math.PI) / 180));
    const blue = Math.floor(128 + 127 * Math.sin(((angle + 240) * Math.PI) / 180));
    title.style.color = `rgb(${red}, ${green}, ${blue})`;

    animationId = requestAnimationFrame(animateTitle);
}

button.addEventListener("click", () => {
    if (animationId === null) {
        animateTitle();
        button.textContent = "Stop Animation";
    } else {
        cancelAnimationFrame(animationId);
        animationId = null;
        button.textContent = "Start Animation";

        title.style.transform = "translateY(0)";
        title.style.color = "#ffdd57";
    }
});
