
   
var x4 = document.getElementById("x4");
var x6 = document.getElementById("x6");
var x9 = document.getElementById("x9");
var gridDOMElements = [x4, x6, x9];
var currentGrid = document.forms["x9"];

// Grid Params
const GRID_4x4 = { size: 16, width: 4, blockWidth: 2, blockHeight: 2 };
const GRID_6x6 = { size: 36, width: 6, blockWidth: 3, blockHeight: 2 };
const GRID_9x9 = { size: 81, width: 9, blockWidth: 3, blockHeight: 3 };

// Default Pa
var grid = GRID_9x9;
var validInputs = true;
var validPuzzle = true;

// Error Messages
const INVALID_INPUTS = "Invalid input(s)! The only valid inputs are 1-";
const INVALID_PUZZLE = "This puzzle does not have a valid solution!";

$(".space").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next(".space").focus();
  }
});

function selectGridSize(id, button) {
  clearGrid();
  var grids = document.getElementsByClassName("grid");
  var buttons = document.getElementsByClassName("select-grid");

  for (var i = 0; i < grids.length; i++) {
    grids[i].classList.add("hide");
    buttons[i].classList.remove("selected");
  }
  document.getElementById(id).classList.remove("hide");
  document.getElementById(button).classList.add("selected");

  switch (id) {
    case "x4":
      grid = GRID_4x4;
      break;

    case "x6":
      grid = GRID_6x6;
      break;

    case "x9":
      grid = GRID_9x9;
      break;
  }
  currentGrid = document.forms[id];
}

function populateArrays() {
  var inputs = currentGrid;
  solutionArray = new Array();
  guessIndexArray = new Array();

  for (var i = 0; i < grid.size; i++) {
    var temp = parseInt(inputs[i].value);
    if (isNaN(temp) || temp == 0) {
      temp = 0;
      guessIndexArray.push(i);
    }

    if (temp < 0 || temp > grid.width) {
      validInputs = false;
    }

    if (temp != 0) {
      if (!checkIfValid(temp, i)) {
        validPuzzle = false;
      }
    }

    solutionArray.push(temp);
  }
}

function solve() {
  for (var i = 0; i < guessIndexArray.length; i) {
    if (i < 0) {
      validPuzzle = false;
      return false;
    }

    var index = guessIndexArray[i];
    solutionArray[index] += 1;
    var guess = solutionArray[index];

    if (guess > grid.width) {
      solutionArray[index] = 0;
      i--;
      continue;
    }

    if (checkIfValid(guess, index)) {
      i++;
    }
  }
  return true;
}

function main() {
  populateArrays();
  if (validInputs && validPuzzle) {
    solve();
  }

  fillInGrid();
  showErrorMessage();

  validInputs = true;
  validPuzzle = true;
}

function checkIfValid(guessValue, guessIndex) {
  var guessRow = findRowIndex(guessIndex);
  var guessColumn = findColumnIndex(guessIndex);
  var guessBlock = findBlockIndex(guessRow, guessColumn);

  for (var j = 0; j < solutionArray.length; j++) {
    if (guessIndex == j) {
      continue;
    }

    var tempRow = findRowIndex(j);
    var tempColumn = findColumnIndex(j);
    var tempBlock = findBlockIndex(tempRow, tempColumn);

    if (
      guessRow == tempRow ||
      guessColumn == tempColumn ||
      guessBlock == tempBlock
    ) {
      if (guessValue == solutionArray[j]) {
        return false;
      }
    }
  }
  return true;
}

function findRowIndex(index) {
  return Math.floor(index / grid.width);
}

function findColumnIndex(index) {
  return index % grid.width;
}

function findBlockIndex(row, column) {
  var block = Math.floor(row / grid.blockHeight) * grid.blockHeight;
  block += Math.floor(column / grid.blockWidth);
  return block;
}

function fillInGrid() {
  for (var i = 0; i < grid.size; i++) {
    if (solutionArray[i] == 0) {
      currentGrid[i].value = "";
    } else {
      currentGrid[i].value = solutionArray[i];
    }
  }
}

function showErrorMessage() {
  var errorMessageElement = document.getElementById("error-message");
  var errorMessage = "";
  if (!validInputs) errorMessage += INVALID_INPUTS + grid.width + ".";

  if (!validPuzzle) errorMessage += INVALID_PUZZLE;

  errorMessageElement.innerHTML = errorMessage;
}

function clearGrid() {
  currentGrid.reset();
  showErrorMessage();
}