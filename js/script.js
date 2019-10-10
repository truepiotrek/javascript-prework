
const buttonRock = document.getElementById('button-rock');
if (buttonRock != null) {
  buttonRock.addEventListener('click', function() {
    buttonClicked('kamień');
  });  
}

const buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function() { 
  buttonClicked('papier');
});

const buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function() { 
  buttonClicked('nożyce');
});

function buttonClicked(buttonName) {
  console.log(buttonName + ' został kliknięty');
  startGame(buttonName);
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function startGame(playerMove) {
  var randomNumber = Math.floor(Math.random() * 3 + 1);

  clearMessages();

  console.log('ruch gracza to: ' + playerMove);
  console.log('wylosowana liczba to: ' + randomNumber);

  var computerMove = getMoveName(randomNumber);

  console.log('ruch komputera to: ' + computerMove);
  displayResult(playerMove, computerMove);
}