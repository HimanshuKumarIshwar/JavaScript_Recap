let randomNumber = Math.floor(Math.random()*100)+1

const userInput =document.querySelector('#userInput');
const form =document.querySelector('form');

const guessSlot =document.querySelector('#prev-num');
const ream =document.querySelector('#ream');
 const lowOrHigh =document.querySelector('.lowOrHigh');
 const startOver =document.querySelector('.resultParas');

const p =document.createElement('p');

let prevGuess = [];
let numGuess =1;
let playGame =true;


if(playGame){
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess)
    });
}




function validateGuess(guess){
    if(isNaN(guess) || guess<1 || guess>100){
        alert(`valid number between 1 to 100`)
    }else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random Number was ${randomNumber}`)
            endGame();
        }else {
            displayGuess(guess)
            checkGuess(guess);
        }

    }
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`)
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is Too low`)
    }else if(guess > randomNumber){
        displayMessage(`Number is Too High`)
    }

}

function displayGuess(guess){
      userInput.value ='';
      guessSlot.innerHTML+= `${guess}, `;
      numGuess++;
      ream.innerHTML =`${11 - numGuess}`

      

}


function displayMessage(message){
    lowOrHigh.innerHTML =`<h3>${message}</h3>`
}

function endGame(){

   userInput.value ='' 
   userInput.setAttribute('disabled', '');
   p.classList.add('button');
   p.innerHTML = `<h3 id="newGame"> start new Game</h3>`
   startOver.appendChild(p);
   playGame = false;
   newGame();

}

function newGame(){
    const newGameButton =document.querySelector('#newGame');
    newGameButton.style.cursor ="pointer"
    newGameButton.style.border ="3px solid blue"
    newGameButton.addEventListener('click', (e)=> {
        randomNumber = Math.floor(Math.random()*100)+1
        prevGuess =[]
        numGuess =1;
        guessSlot.innerHTML ='';
        ream.innerHTML = 10;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame  =true;
    })


}








