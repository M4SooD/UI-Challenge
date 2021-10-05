const numbers = document.getElementsByClassName("password--numbers");
const inputs = document.getElementsByClassName("password--field");
const clearBtn = document.getElementById('clear');


// region Button Functionality

const listenToClearClick = () => {
  clearBtn.addEventListener('click', () => {});
}

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
  if (focusedInput) {
    focusedInput.value = value;

    // TODO: Call set focus on next input
    const currentInputIndex = getInputIndex(focusedInput);
    setFocusOnInput(currentInputIndex + 1);
  } else {
    // TODO: Check which element have value, and if there is none, set value to first.
    inputs[0].focus();
    inputs[0].value = value;
    setFocusOnInput(1);
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

const clearLastValuedInput = () => {
  // TODO: Clear the last input which has value
  for(let item of inputs){
    item.value = "";
  }
  const hasValue = (inputs) => inputs.value != "";
    inputs.some(hasValue);

  // TODO: Focus on input before the cleared input

};

// endregion

setListenerOnBtns();
setListenerOnFieldFocus();
