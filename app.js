

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
    
}

const logTodos = () => {
    console.log('hello')
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    
    const orderedList = document.getElementById('todo-list')
    for(let i = 0; i < arrayOfTodos.length; i++){
        console.log(arrayOfTodos.length,'*************', i, '***************')
        // const newListItem = document.createElement('li')
        const newListItem = document.createElement('li')
        const newListContent = document.createTextNode(arrayOfTodos[i].title)
        console.log(newListContent, '************')
        newListItem.appendChild(newListContent)
        orderedList.appendChild(newListItem)
    }
    
    
    // console.log(newListContent, 'title data')
    // console.log(newListItem, "new li")
    console.log(orderedList, 'ol')
    // console.log(populateTodos(), 'populate')
} 

const filterTodos = () => {
    // clear current list //
    const addList = document.getElementById('filtered-todo-list')
    const orderedList = document.getElementById('todo-list') 
    orderedList.innerText = ''
    addList.innerText = ''
    
    // filter current list //
    const filteredList = document.getElementById('userID')
    console.log()
    let input = filteredList.value
    const filtering = arrayOfTodos.filter(i => i.userId == input)
    
    console.log(arrayOfTodos, 'array of todos')
    console.log(input,'********')
    
    
    for(let i = 0; i < filtering.length; i++){
        
        
        // add new list items to page //
        const addList = document.getElementById('filtered-todo-list')
        const newFilteredItem = document.createElement('li')
        const newFilteredContent = document.createTextNode(filtering[i].title)
        newFilteredItem.appendChild(newFilteredContent)
        addList.appendChild(newFilteredItem)
    }
    
    // console.log(newFilteredContent,'new content')
    // console.log(filteredList, '*****************')
    console.log(filtering, 'filtering*****')
}

const completedTodos = () => {
    const orderedList = document.getElementById('todo-list')
    const addList = document.getElementById('filtered-todo-list') 
    orderedList.innerText = ''
    addList.innerText = ''
    
    const filtering = arrayOfTodos.filter(i => i.completed == true)
    console.log(filtering, 'completed list')
    
    for(let i = 0; i < filtering.length; i++){
        
        
        // add new list items to page //
    const addList = document.getElementById('filtered-todo-list')
    const newFilteredItem = document.createElement('li')
    const newFilteredContent = document.createTextNode(filtering[i].title)
    newFilteredItem.appendChild(newFilteredContent)
    orderedList.appendChild(newFilteredItem)
}


}

const incompleteTodos = () => {
    const orderedList = document.getElementById('todo-list')
    const addList = document.getElementById('filtered-todo-list') 
    orderedList.innerText = ''
    addList.innerText = ''

    const filtering = arrayOfTodos.filter(i => i.completed == false)
    console.log(filtering, 'incomplete list')

    for(let i = 0; i < filtering.length; i++){
        
        
        // add new list items to page //
      const addList = document.getElementById('filtered-todo-list')
      const newFilteredItem = document.createElement('li')
      const newFilteredContent = document.createTextNode(filtering[i].title)
      newFilteredItem.appendChild(newFilteredContent)
      orderedList.appendChild(newFilteredItem)
      }


}
// const result = arrayOfTodos.filter(filterTodos)
// console.log(filterTodos(),'*******')

    
    
    
    
    
    
    
    
    
    
    
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