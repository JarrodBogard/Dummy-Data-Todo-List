// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
     "completed": false
},
{
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
}]



const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
    console.log(fetchTodos)
}
    
const logTodos = () => {
    console.log(arrayOfTodos)
}
    
const populateTodos = () => {
        
        
    const orderedList = document.getElementById('todo-list')
    const newListItem = document.createElement('li')
    const newListContent = document.createTextNode(arrayOfTodos.title)
    newListItem.appendChild(newListContent)
    orderedList.appendChild(newListItem)
        
        
    console.log(newListContent, 'title data')
    console.log(newListItem, "new li")
    console.log(orderedList, 'ol')
    console.log(populateTodos, 'populate')
}

    
    
    
    
    
    
    
    
    
    
    
    
// index = arrayOfTodos.title

// const populateTodos = () => {
//         const obj = arrayOfTodos[index].title
//         // for ()
//         const list = document.getElementById('todo-list')
//         const newList = document.createElement("li")
//         const addData = document.createTextNode(obj.title)
//         newList.appendChild(addData)
//         list.appendChild(newList)
    
//         console.log(list)
//         console.log(newList)
//         console.log(addData)

// }