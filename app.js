const button = document.getElementById('button');
const randomnum = document.getElementById('random-num');
const number = document.getElementById('number');
const span1 = document.getElementById('span');

let theRandomNumber = Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', () =>{
    let userGuess = Number(number.value);
    console.log(userGuess);
    // span1.textContent = randomnum.value;


});

