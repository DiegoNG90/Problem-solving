let todosLi= document.querySelectorAll('li');
console.log(todosLi);

let todosLiToArray = [];
for (let index = 0; index < todosLi.length; index++) {
    todosLiToArray.push(todosLi.item(index).innerHTML);
}
console.log(todosLiToArray)