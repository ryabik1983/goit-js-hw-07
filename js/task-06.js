const inputArea = document.querySelector('#validation-input');
console.log(inputArea);
const inputLength = inputArea.dataset.length;
inputArea.addEventListener('blur', invalidArea);
function invalidArea() {
    if (inputLength === 'inputArea.value.length') {
        inputArea.classList.add('valid')
    }
    else {
        inputArea.classList.add('invalid')
    }
    inputArea.classList.remove('valid')
    inputArea.classList.add('invalid')
}
console.log(inputLength);
console.log(inputArea.value.length);


// const countLetters = Number(inputRef.attributes["data-length"].value);
// function onOutFocus(params) {
//     const clName =
//         params.target.value.length === countLetters ? "valid" : "invalid";
//     params.target.classList.remove("valid");
//     params.target.classList.remove("invalid");
//     params.target.classList.add(clName);
// }