function updateCounters() {

    const totalCount = document.getElementById("total-count");
    const totalTodos = document.getElementsByClassName("todo").length;
    totalCount.innerHTML = totalTodos;
  

    const completedCount = document.getElementById("completed-cnt");
    const completedTodos = document.getElementsByClassName("completed").length;
    completedCount.innerHTML = completedTodos;
  
 
    const todoCount = document.getElementById("count");
    const uncompletedTodos = totalTodos - completedTodos;
    todoCount.innerHTML = uncompletedTodos;
  }
  updateCounters();



  function toggleDone(event) {
    const checkbox = event.currentTarget;
 
    if (checkbox.checked) {
    
      checkbox.parentElement.parentElement.className = "todo completed";
    } else {
      checkbox.parentElement.parentElement.className = "todo";
    }
  
    updateCounters();
  }


  
  const checkboxes = document.querySelectorAll(".todo input");
    for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", toggleDone);
  }

  function createTodo(title) {
    const label = document.createElement("label");
  
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = false;
   
    checkbox.addEventListener("change", toggleDone);
    label.appendChild(checkbox);

    
    
    const labelText = document.createTextNode(" " + title);
    label.appendChild(labelText);
    
    
    const listItem = document.createElement("li");
    listItem.className = "todo";
    
    listItem.appendChild(label);
    
    const list = document.getElementById("todolist");
    list.appendChild(listItem);

    
  }
  
  //  add new todo  
  document.querySelector("form")
  document.addEventListener("submit", function addNewTodo(event) {
    
    event.preventDefault();
  
    const dateInput = event.target[0];
    const inputField = event.target[1];
    const newTodoTitle = inputField.value;
    const entry = inputField.value + " - " + dateInput.value
    createTodo(entry);

    inputField.value = null;
      updateCounters();
    });

    // locale storage

// an uparxoun saved items sto localStorage
let todos = JSON.parse(localStorage.getItem("todos") || "[]");


    
    function cleanUpTodos() {
      // get all the "done" items

      //erwtisi gia to .completed
      const doneItems = document.querySelectorAll(".completed");
    
      // loop through the "done" todo items
      for (let i = 0; i < doneItems.length; i++) {
        doneItems[i].remove();
      }
    
      updateCounters();
    }
    
    document.getElementById("clean-up").addEventListener("click", cleanUpTodos);


    const pickr = Pickr.create({
      el: '.color-picker',
      theme: 'classic', 
  
      swatches: [
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)'
      ],
  
      components: {
  
          
          preview: true,
          opacity: true,
          hue: true,
  
          
          interaction: {
              hex: true,
              rgba: true,
              input: true,
              clear: true,
              save: true
          }
      }
  });


  pickr.on('change', (color, source, instance) => {
    const rgbaColor = color.toRGBA().toString();
    document.querySelector('ul').style.background = rgbaColor;
});

let dateInput = [];
dateInput = document.getElementById("dateInput");

// rednering todos
// check if the localstorage has saved items, if not init to empty array
// parse the items from localstortage
// with a for loop or whatever render the list items (create li element, appendchild to (ul element))

// save todos
// when the user enter a new todo, parse the saved todos from  LS (Localstorage) and then add the new todo in tha array.
// stingify the new array and save it in LS.
// use push.todo

// REMOVE ITEM FROM LS
// parse the saves todos from LS , filter.array.wherethename !== to the completed todo.
// stringify the new array and save it to LS.




 