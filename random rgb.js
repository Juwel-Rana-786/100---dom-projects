const container = document.getElementById("rgb-container")
const btn = document.getElementById("rgb-btn");
const output = document.getElementById("output");
console.log("🚀 ~ file: random rgb.js:4 ~ output:", output)



btn.addEventListener("click", () => {
    const r = Math.round(Math.random() * 255).toString(16)
    const g = Math.round(Math.random() * 255).toString(16)
    const b = Math.round(Math.random() * 255).toString(16)
    const rgb = `#${r}${g}${b}`

    container.style.backgroundColor = rgb;
    output.value = rgb

})

// rgb(255, 255, 255)
// #000000
// red