var ToDoList = (props) => (
  <div>
    <ul id="doList">
      <li>{props.list}</li>
    </ul>
  </div>
)

window.ToDoList = ToDoList;