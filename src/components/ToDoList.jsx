var ToDoList = (props) => (
  <div>
    <ul id="doList">
      <li>{props.list}</li>
      <button onClick={props.deleteToDoList}>Remove This</button>
    </ul>
  </div>
)

window.ToDoList = ToDoList;