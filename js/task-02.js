const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];


const ingredientsList = document.querySelector("#ingredients");

const makeingredientsList = (array) =>
    array.map(element => {
        const ingredientsEl = document.createElement('li');
        ingredientsEl.textContent = element;
        return ingredientsEl;
    });


ingredientsList.append(...makeingredientsList(ingredients));

