const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const automatico = document.querySelector('.auto');
const delay = document.getElementById('delay');
// let tempoDeDelay = delay.value * 1000;
btn.addEventListener('click', () => trocaCor() )
// console.log(tempoDeDelay);
console.log(delay)
function trocaCor(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor +=hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}

function trocaCorAutomatico(){
    let tempoDeDelay = delay.value * 1000;
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor +=hex[getRandomNumber()]
    }
    console.log('ta entrando aqui mds')
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log(tempoDeDelay);
}


function getRandomNumber(){
    return Math.floor(Math.random()* hex.length)
}
let ligado = false;
automatico.addEventListener('click', function(){
    
    // console.log(tempoDeDelay);
    if(!ligado){
        trocaCorAutomatico();
        setInterval("trocaCorAutomatico()",tempoDeDelay );
        ligado = true;
    }
    else {
        ligado = false;
    }
})