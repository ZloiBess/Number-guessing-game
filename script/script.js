/** 
 * my control levers are DOM dominance >:)) 
*/
var numberField = document.querySelector(".numberField");
var enterButton = document.querySelector(".enterButton");
var previewNumbers = document.querySelector(".previewNumbers");
var lowOrHi = document.querySelector(".lowOrHi");
var lastResult = document.querySelector(".lastResult");
// addintional var:
var randomNumber = Math.floor(Math.random() * 100) + 1; //ramdomizer.
var guessCount = 1; // count the user's attempts.
var resetButton; //create a button from a new game.


/**
 *  _______Implementation_____  \(0~0)/  
 * 
*/

/**
 * main logic
*/
function check() {
    //get and check number from user.
    var userNum = Number(numberField.value);
    
    if (guessCount === 1) {
        //on the first try we display the next text.
        previewNumbers.textContent = "Previous numbers: "
    }
    //add all the numbers from the user and show.
    previewNumbers.textContent += userNum + " ";

    if (userNum === randomNumber) {
        //if guessed the number.
        lastResult.textContent = "You Winner!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        //create new game.
        resetGameOver();
    } else if (guessCount === 10) {
        //if attempts ended.
        lastResult.textContent = "You Lose!";
        lastResult.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        //create new game.
        resetGameOver();
    } else {
        //indicates the selected number is greater or less.
        if (userNum > randomNumber) {
            lowOrHi.textContent = "low!";
        } else {
            lowOrHi.textContent = "high!";
        }
    }
    guessCount++;
    //clear the input field and focus on it.
    numberField.value = "";
    numberField.focus();
}


/**
 *  create new game
*/
function resetGameOver() {
    //block input.
    numberField.disabled = true;
    enterButton.disabled = true;
    //create button for new game.
    var newGameButton = document.createElement("button");
    newGameButton.textContent = "Start new Game!";
    main = document.querySelector("main");
    main.appendChild(newGameButton);
    /**
     *  reset
    */
    newGameButton.addEventListener("click", function () {
        guessCount = 1;
        //clear all elements from result.
        var resultElements = document.querySelectorAll(".resultElement p");
        for (var i = 0; i < resultElements.length; i++) {
            resultElements[i].textContent = "";
        }
        //unblock input.
        numberField.disabled = false;
        enterButton.disabled = false;
        //delete button.
        newGameButton.parentNode.removeChild(newGameButton);
        //new random num.
        randomNumber = Math.floor(Math.random() * 100) + 1;
 
    });
}


/** 
 *  action scene 
*/
enterButton.addEventListener("click", check);


