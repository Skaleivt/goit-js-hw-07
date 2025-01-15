const text = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");
const defaultText = 'Anonymous';

text.addEventListener("input", () => {
    const inputText = text.value.trim();
    nameOutput.textContent = inputText === "" ? defaultText : inputText;
})




const h1 = document.querySelector("h1");
h1.style.fontFamily = "Montserrat";
h1.style.fontWeight = "600";
h1.style.fontSize = "24px";
h1.style.lineHeight = "133%";
h1.style.letterSpacing = "0.04em";
h1.style.color = " #2e2f42";
