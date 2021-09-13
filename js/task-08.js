// const refs = {
//     inputArea: document.querySelector('input'),
//     renderBtn: document.querySelector('[data-action="render"]'),
//     destroyBtn: document.querySelector('[data-action="destroy"]'),
//     boxes: document.querySelector('#boxes'),

// }
// console.log(refs.inputArea);
// console.log(refs.renderBtn);
// console.log(refs.destroyBtn);
// console.log(refs.boxes);
// // Получение числа, которое введено в Инпут
// refs.inputArea.addEventListener('blur', onInputAreaChange)
// function onInputAreaChange() {
//     console.log('Потеря фокуса на инпуте', refs.inputArea.value);
//     // return refs.inputArea.value;
// }
// // Функция создания элементов

// // console.log(amount);
// refs.renderBtn.addEventListener('click', createBoxes);
// let divEl = document.createElement('div');
// divEl.width = 30;
// divEl.height = 30;
// // divEl.backgroundColor =;

// function createBoxes(inputEl) {
//     refs.boxes.appendChild(divEl)

//     // console.log(`Создаем ${refs.inputArea.value} элементов`);
//     // let amount = [...refs.inputArea.value]
//     // console.log(amount);
// }


// refs.renderBtn.addEventListener('click', onCreateList);
// refs.destroyBtn.addEventListener('click', onDestroyList);

// function getRGB() {
//     const r
// }

const btnEl = document.querySelectorAll('button[data-action]')
const inputEl = document.querySelector('input')
const boxEl = document.querySelector('#boxes')
function createBoxes(amount) {
    const elements = []
    let widthEl = 30
    let heightEl = 30
    const step = 10
    for (let i = 0; i < amount; i++) {
        elements.push(document.createElement('div'))
        elements[i].style.width = widthEl + 'px'
        elements[i].style.height = heightEl + 'px'
        elements[i].style.backgroundColor = `#${Math.random()
            .toString(16)
            .substring(2, 8)}`
        widthEl += step
        heightEl += step
    }
    boxEl.append(...elements)
}
function destroyBoxes() {
    boxEl.innerHTML = ''
}
btnEl.forEach((element) => {
    if (element.dataset.action === 'render') {
        element.addEventListener('click', () => {
            destroyBoxes()
            createBoxes(inputEl.value)
        })
    } else {
        element.addEventListener('click', destroyBoxes)
    }
})