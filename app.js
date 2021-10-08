const button = document.getElementById('generate');
const number = document.getElementById('number');
const theRandomNumber = document.getElementById('random-num');

Math.floor(Math.random() * 20) + 1;

button.addEventListener('click', () =>{
    let userGuess = Number(number.value);
    console.log(userGuess);
    

});

