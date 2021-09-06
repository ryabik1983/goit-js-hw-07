const refs = {
    rangeInput: document.querySelector('#font-size-control'),
    rangeResult: document.querySelector('#text')
}

refs.rangeInput.addEventListener('input', onInputChange);
function onInputChange(event) {
    refs.rangeResult.style.fontSize = `${event.target.valueAsNumber}px`;
}




