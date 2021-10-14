const button = document.getElementById('generate');
const number = document.getElementById('random-num');

let num = (Math.floor(Math.random() * 100)) + 1;

button.addEventListener('click', () =>{
    number.textContent = num;
    num = (Math.floor(Math.random() * 100)) + 1;
    

});

