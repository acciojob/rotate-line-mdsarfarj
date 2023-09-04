//your JS code here. If required.
const line = document.getElementById('line');
let rotationAngle = 0;

function rotateLine() {
    rotationAngle += 1;
    line.style.transform = `rotate(${rotationAngle}deg)`;
}

// Set an interval to continuously rotate the line
setInterval(rotateLine, 20);