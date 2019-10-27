const actions = {
  kamien: 'kamień',
  nozyce: 'nożyce',
  papier: 'papier',
};

function buttonClickHandler (event){
  event.preventDefault();
  console.log(event);
  const clickedElement = event.target;
  console.log(clickedElement);
  const buttonName = clickedElement.getAttribute('data-move-id')
  console.log(buttonName);


  startGame(buttonName);
};

const buttons = document.getElementById('buttons');
const buttonsName = buttons.querySelectorAll('button');
for(let buttonName of buttonsName){
  console.log(buttonName);
  buttonName.addEventListener('click', buttonClickHandler);
}

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return actions.kamien;
  } else if (argMoveId == 2) {
    return actions.papier;
  } else if (argMoveId == 3) {
    return actions.nozyce;
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return actions.kamien;
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == actions.papier && argComputerMove == actions.kamien) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == actions.kamien && argComputerMove == actions.nozyce) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == actions.nozyce && argComputerMove == actions.papier) {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

function startGame(paramPlayerMove) {
  const randomNumber = Math.floor(Math.random() * 3 + 1);

  clearMessages();

  console.log('ruch gracza to: ' + paramPlayerMove);
  console.log('wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);

  console.log('ruch komputera to: ' + computerMove);
  displayResult(paramPlayerMove, computerMove);
}

