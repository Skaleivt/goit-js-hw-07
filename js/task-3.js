const text = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

text.addEventListener("input", (event) => {
    nameOutput.textContent = event.currentTarget.value;
})




const h1 = document.querySelector("h1");
h1.style.fontFamily = "Montserrat";
h1.style.fontWeight = "600";
h1.style.fontSize = "24px";
h1.style.lineHeight = "133%";
h1.style.letterSpacing = "0.04em";
h1.style.color = " #2e2f42";
