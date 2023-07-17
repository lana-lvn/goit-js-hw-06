const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsListEl = document.querySelector('#ingredients');

const listItemsEl = ingredients.map((ingredient) => {
  
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  
  return itemEl;
})
    
ingridientsListEl.append(...listItemsEl);