const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let counterValue = 0;

function updateCounterValue() { 
    return valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    updateCounterValue();
});

 incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    updateCounterValue();
 });
  
 updateCounterValue();