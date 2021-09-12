const refs = {
    inputArea: document.querySelector('input'),
    renderBtn: document.querySelector('[data-action="render"]'),
    destroyBtn: document.querySelector('[data-action="destroy"]'),
    boxes: document.querySelector('#boxes'),

}
console.log(refs.renderBtn);
console.log(refs.destroyBtn);
console.log(refs.boxes);
console.log(refs.inputArea);

refs.renderBtn.addEventListener('click', onCreateList);
refs.destroyBtn.addEventListener('click', onDestroyList);

function getRGB() {
    const r
}