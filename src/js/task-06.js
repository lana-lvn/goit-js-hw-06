const checkInput = document.querySelector('#validation-input');
const minLength = Number(checkInput.dataset.length);

checkInput.addEventListener('blur', validateInput);

function validateInput() { 
    const currentLength = checkInput.value;

    if (currentLength.length === minLength) {
        checkInput.classList.remove('invalid');
        checkInput.classList.add('valid');
    } else { 
        checkInput.classList.remove('valid');
        checkInput.classList.add('invalid');
    }
};
