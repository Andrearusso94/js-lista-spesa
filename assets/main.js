const shoppingList = ['pane', 'latte', 'uova', 'pasta'];

const shoppingListEl = document.querySelector('ul') 

let i = 0;
while (i < shoppingList.length) {
    const element = shoppingList[i];
    console.log(element);

    i++
    const liElement = `<li>${element}</li>`
    shoppingListEl.insertAdjacentHTML('beforeend', liElement)
}