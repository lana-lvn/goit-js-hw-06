const ulEl = document.querySelector('#categories');
const itemEl = ulEl.querySelectorAll('.item');


const numberOfCategories = itemEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

itemEl.forEach((item) => {
    const categoryTitleEl = item.querySelector('h2').textContent;
    const categoryElements = item.querySelectorAll('li').length;

    console.log(`Category: ${categoryTitleEl}`);
    console.log(`Elements: ${categoryElements}`);
});