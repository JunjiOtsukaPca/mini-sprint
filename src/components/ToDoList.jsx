var ToDoList = (props) => (
  <div>
    <ul id="doList">
      <div onClick={(e) => props.deleteToDoList(e.target.innerHTML, props.list._id)}>
        <li>{props.list.toDo}</li>
      </div>
    </ul>
  </div>
)

window.ToDoList = ToDoList;