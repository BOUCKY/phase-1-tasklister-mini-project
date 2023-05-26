document.addEventListener("DOMContentLoaded", () => {
  // your code here
  // find the form and add event listener so the submit button works
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    // prevent it from automatically refreshing the page
    e.preventDefault()
    const taskDescrip = e.target["new-task-description"].value
    const taskDate = e.target["new-task-due-date"].value
    // priority selection
    const priority = document.getElementById("taskPriority")
    const selectedPriority = priority.value
    console.log(selectedPriority)
    // function to add the input to the list
    addToList(taskDescrip)
    // clear the input section after a task has been created
    form.reset()

  })
});

 function addToList(todo){
  // create a place for the task and due date to go
  let p = document.createElement('p')
  // create a date var to access and add to the task
  let date = newTaskDueDate.value
  // create a delete button and make it's text be an X
  let btn = document.createElement('button')
  // create an event listener so the button actually deletes the task
  btn.addEventListener('click', removeFromList)
  btn.textContent = "X"
  // the content that goes in the p tag will be formated like this --> task: due date  X(delete button)
  p.textContent = `${todo}: ${date} `
  // add the delete button to the end of the tag
  p.appendChild(btn)
  // create container to append todo list to 
  const listContainer = document.getElementById('list')
  // append to do list
  listContainer.appendChild(p)
  //console.log(listContainer)
 }

 // get the delete button to delete task
 function removeFromList(e){
  e.target.parentNode.remove()
 }