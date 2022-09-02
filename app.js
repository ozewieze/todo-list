// add a new todo
const add = document.querySelector(".add");
const list = document.querySelector(".list");
console.log(list);
const generateTemplate = (todo) => {
  const html = `<li class="list-item">
  ${todo}
  <ion-icon
    class="done-icon add-background-blue"
    name="checkmark-done-outline"
  ></ion-icon
  ><ion-icon
    class="list-icon add-background-red"
    name="trash-sharp"
  ></ion-icon>
</li>`;
  return (list.innerHTML += html);
};

add.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = add.addTodo.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    add.reset();
  }
});

// deleting the items with trashcan
list.addEventListener("click", (e) => {
  e.preventDefault();

  console.log(e.target.parentElement);

  if (e.target.classList.contains("list-icon")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("done-icon")) {
    e.target.parentElement.classList.toggle("text");

    // but now change to toggle!
  }
});
