const container = document.getElementById("rgb-container")
console.log("🚀 ~ file: random rgb.js:2 ~ container:", container)
const btn = document.getElementById("rgb-btn");


btn.addEventListener("click", () => {
    const r = Math.round(Math.random() * 255)
    const g = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)

    container.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})