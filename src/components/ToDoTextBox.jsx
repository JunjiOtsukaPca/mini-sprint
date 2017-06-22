var ToDoTextBox = (props) => (
  <div>
    <input className="submitList" type="text" onChange={(e) => props.changeCurrList(e.target.value)}/>
    <button type="submit" onClick={(e) => props.postToDoList(e.target.value)}> Post </button>
  </div>
)


window.ToDoTextBox = ToDoTextBox;