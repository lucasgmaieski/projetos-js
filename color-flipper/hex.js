const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const automatico = document.querySelector(".auto");
const delay = document.getElementById("delay");
const contraste = document.querySelectorAll('.contrast');

btn.addEventListener("click", () => trocaCor());

function trocaCor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log(delay.value);
  if(chroma(hexColor).luminance() > 0.5){
    contraste.forEach(element => {
      element.style.backgroundColor = "black";
      element.style.color = "white";
    })
  }
  else {
    contraste.forEach(element => {
      element.style.backgroundColor = "white";
      element.style.color = "black";
    })
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
let ponteiro;
let ligado = false;
automatico.addEventListener("click", () => {
  if (!ligado) {
    ponteiro = setInterval(trocaCor, delay.value * 1000);
    ligado = true;
  } else {
    clearInterval(ponteiro);
    ligado = false;
  }
});

delay.addEventListener("change", () => {
  if (ligado) {
    clearInterval(ponteiro);
    ponteiro = setInterval(trocaCor, delay.value * 1000);
  }
});
