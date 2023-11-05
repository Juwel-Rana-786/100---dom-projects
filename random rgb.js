const container = document.getElementById("rgb-container")
const btn = document.getElementById("rgb-btn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copy");





btn.addEventListener("click", () => {
    // const r = Math.round(Math.random() * 255).toString(16)
    // const g = Math.round(Math.random() * 255).toString(16)
    // const b = Math.round(Math.random() * 255).toString(16)
    // const rgb = `#${r}${g}${b}`

    container.style.backgroundColor = output.value;
    // output.value = rgb

})
copyBtn.addEventListener("click", () => {

    navigator.clipboard.writeText(output.value)
    console.log(output.value)
})

// rgb(255, 255, 255)
// #000000
// red

