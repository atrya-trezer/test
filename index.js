var readlineSync = require('readline-sync');
const variants = ['rock','scissors','paper'];

const rockPaperScissors = (yourChoice) => {
  // пишу по-английски потому что не смог заставить readline работать с русским в windows powershell
  let winner;
  let compChoice = variants[ Math.floor(Math.random() * variants.length) ];
  if (compChoice === yourChoice) {
    winner = 'ничья';
  }
  else if (compChoice === 'rock') {
    if (yourChoice === 'scissors') {
      winner = 'компьютер';
    }
    if (yourChoice === 'paper') {
      winner = 'игрок';
    } 
  }
  else if (compChoice === 'scissors') {
    if (yourChoice === 'rock') {
      winner = 'игрок';
    }
    if (yourChoice === 'paper') {
      winner = 'компьютер';
    } 
  }
  else if (compChoice === 'paper') {
    if (yourChoice === 'rock') {
      winner = 'компьютер';
    }
    if (yourChoice === 'scissors') {
      winner = 'игрок';
    }
  }

  let ret = `Вы показали ${yourChoice}, компьютер показывает ${compChoice}. Победил ${winner}`;


  return ret;
};

var userInput = readlineSync.question('Your choice: "rock", "scissors" or "paper"? ');
//console.log(userInput);
console.log(rockPaperScissors(userInput));