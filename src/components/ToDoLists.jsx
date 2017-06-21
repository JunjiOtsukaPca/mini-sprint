var ToDoLists = (props) => (
  <div>
    {props.lists.map((list) =>
      <ToDoList
        getToDoList={props.getToDoList}
        list={list}
      />
    )}
  </div>
)

window.ToDoLists = ToDoLists;