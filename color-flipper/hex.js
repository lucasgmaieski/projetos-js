const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const automatico = document.querySelector(".auto");
const delay = document.getElementById("delay");

// let tempoDeDelay = delay.value * 1000;
btn.addEventListener("click", () => trocaCor());
// console.log(tempoDeDelay);
console.log(delay);

function trocaCor() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
  console.log("ta entrando aqui pra trocar de cor");
  console.log(delay.value);
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
    console.log(`opa tamo ai mudando o delay pra: ${delay.value}`);
  } else {
    console.log("blau");
  }
});
