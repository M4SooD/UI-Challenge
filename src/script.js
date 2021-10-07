const numbers = document.getElementsByClassName("password-button");
const inputs = document.getElementsByClassName("password-field");
const clearBtn = document.getElementById("clear-btn");

const numPadValues = []; // from 0 to 9

// region Document Functionality
document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    clearLastValuedInput();
  } else if (event.key >= 0 && event.key <= 9) {
    setInputValue(event.key);
  }
});

const createButtons = (numPadValues) => {
  const container = document.getElementById("buttons-container");

  for (let i = 0; i <= numPadValues.length; i++) {
    if (i === 10) {
      // TODO: Add clear all functionality
      createButton('❌', container, `clear-all`, ['password-button']);
    } else {
      createButton(numPadValues[i], container, `btn-${i}`, ['password-button']);
    }
  }

  createButton('←', container, `clear-btn`, ['password-button']);
};

const createButton = (innerText, container, id, classList) => {
  const button = document.createElement('button');
  button.classList.add(...classList);
  button.innerText = innerText;
  button.id = id;
  container.appendChild(button);
}

const createRandomNumbers = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

function numPadFiller(arr) {
  let rnd;
  while (numPadValues.length < 10) {
    rnd = createRandomNumbers(0, 9);
    if (arr.indexOf(rnd) < 0) {
      numPadValues.push(rnd);
    }
  }
}


// endregion

// region Button Functionality

const listenToClearClick = () => {
  clearBtn.addEventListener("click", clearLastValuedInput);
};

const setListenerOnBtns = () => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => onBtnClick(event));
  }
  listenToClearClick();
};

function onBtnClick(event) {
  setInputValue(event.target.innerText);
}

// endregion

// region Inputs Functionality

let focusedInput;

const setListenerOnFieldFocus = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", () => {
      focusedInput = inputs[i];
    });
  }
};

const setInputValue = (value) => {
  if (inputs[inputs.length - 1].value.length === 0) {
    if (focusedInput) {
      focusedInput.value = value;

      const currentInputIndex = getInputIndex(focusedInput);
      setFocusOnInput(currentInputIndex + 1);
    } else {
      inputs[0].focus();
      inputs[0].value = value;
      setFocusOnInput(1);
    }
  }
};

const setFocusOnInput = (index) => {
  if (inputs[index]) {
    inputs[index].focus();
  }
};

const getInputIndex = (input) => {
  let itemIndex;
  for (let i = 0; i < inputs.length; i++) {
    if (input.id === inputs[i].id) {
      itemIndex = i;
    }
  }
  return itemIndex;
};

const clearLastValuedInput = () => {
  let itemIndex;
  for (let i = inputs.length - 1; i >= 0; i--) {
    if (inputs[i].value.length !== 0 && itemIndex === undefined) {
      inputs[i].value = null;
      itemIndex = i;
    }
  }

  setFocusOnInput(itemIndex - 1);
};

const hasValue = (inputs) => inputs.value !== "";

// endregion

numPadFiller(numPadValues);
createButtons(numPadValues);

setListenerOnBtns();
setListenerOnFieldFocus();
