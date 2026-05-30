const r = Math.random()*256;
const g = Math.random()*256;
const b = Math.random()*256;

const color = `rgb(${r}, ${g}, ${b})`;
console.log(color);



document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = color;
})