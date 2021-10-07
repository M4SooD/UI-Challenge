const numbers = document.getElementsByClassName('password--numbers');
const inputs = document.getElementsByClassName('password--field');
const clearBtn = document.getElementById('clearBtn');

// Document Functionality

document.body.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        clearLastValuedInput();
    }

    if (event.key >= 0 && event.key <= 9) {
        setInputValue(event.key);
    }
})

// region Button Functionality

const listenToClearClick = () => {
    clearBtn.addEventListener('click', clearLastValuedInput);
}

const setListenerOnBtns = () => {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', (event) => onBtnClick(event));
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
        inputs[i].addEventListener('focus', () => {
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
    for (let i = (inputs.length - 1); i >= 0; i--) {
        if (inputs[i].value.length !== 0 && itemIndex === undefined) {
            inputs[i].value = null;
            itemIndex = i;
        }
    }

    setFocusOnInput(itemIndex - 1);
};

// endregion

setListenerOnBtns();
setListenerOnFieldFocus();
