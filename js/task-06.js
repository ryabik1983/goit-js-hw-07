const inputArea = document.querySelector('#validation-input');
inputArea.addEventListener('blur', validationInput);
const countLetters = Number(inputArea.attributes["data-length"].value);
function validationInput(params) {
    const className =
        params.target.value.length === countLetters ? "valid" : "invalid";
    params.target.classList.remove("valid");
    params.target.classList.remove("invalid");
    params.target.classList.add(className);
};
