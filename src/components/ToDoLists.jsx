var ToDoLists = (props) => (
  <div>
    {props.lists.map((list) =>
      <ToDoList
        getToDoList={props.getToDoList}
        list={list}
        deleteToDoList={props.deleteToDoList}
      />
    )}
  </div>
)

window.ToDoLists = ToDoLists;