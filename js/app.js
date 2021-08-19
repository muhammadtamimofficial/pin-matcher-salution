function getPin() {
    const Pin = Math.round(Math.random() * 10000);
    const PinString = Pin + "";
    if (PinString.length == 4) {
        return Pin;
    }
    else {
        // console.log('Give me 4 degit', Pin);
        return getPin();
    }
}
function generatePin() {
    const Pin = getPin();
    document.getElementById('display-pin').value = Pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbes');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});
function verifyPin() {

    const Pin = document.getElementById('display-pin').value;
    const TypedNumbers = document.getElementById('typed-numbes').value;

    const successMessage = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');

    if (Pin == TypedNumbers) {
        failError.style.display = 'none';
        successMessage.style.display = 'block';
    }
    else {
        failError.style.display = 'block';
        successMessage.style.display = 'none';

    }
}