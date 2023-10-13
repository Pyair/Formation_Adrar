function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setBodyGradient() {
    const startColor = generateRandomColor();
    const endColor = generateRandomColor();
    document.body.style.background = `linear-gradient(to right, ${startColor}, ${endColor})`;
}

setInterval(setBodyGradient, 2000); // Change le dégradé toutes les 2 secondes (2000 millisecondes)
