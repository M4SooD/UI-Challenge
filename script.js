const numbers = document.getElementsByClassName("password--numbers");
const inputs = document.getElementsByClassName("password--field");

let focusedInput;

const setListenerOnBtns = () => {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", (event) => onBtnClick(event));
  }
};

const setListenerOnFieldFocus = () => {
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("focus", () => {
      focusedInput = inputs[i];
    });
  }
};

const setInputValue = (value) => {
  if (focusedInput) {
    focusedInput.value = value;

    // TODO: Call set focus on next input
    const currentInputIndex = getInputIndex(focusedInput);
    setFocusOnInput(currentInputIndex + 1);
  } else {
    // TODO: Check which element have value, and if there is none, set value to first.
    inputs[0].focus();
  }
};

const setFocusOnInput = (index) => {
  // TODO: Check if element exists set focus
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
  // return inputs.indexOf(input);
};

const clearField = () => {
  // TODO: Clear focused input and focus on last one
};

function onBtnClick(event) {
  setInputValue(event.target.innerText);
}

setListenerOnBtns();
setListenerOnFieldFocus();
