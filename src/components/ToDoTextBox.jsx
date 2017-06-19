var ToDoTextBox = (props) => (
  <div>
    <input className="submitList" type="text" onChange={(e) => props.changeCurrList(e.target.value)}/>
    <button type="submit" onClick={(e) => props.clickCurrList(e.target.value)}> Submit </button>
  </div>
)


window.ToDoTextBox = ToDoTextBox;