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