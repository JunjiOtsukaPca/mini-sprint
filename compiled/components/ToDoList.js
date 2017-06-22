"use strict";

var ToDoList = function ToDoList(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      { id: "doList" },
      React.createElement(
        "div",
        { onClick: function onClick(e) {
            return props.deleteToDoList(e.target.innerHTML, props.list._id);
          } },
        React.createElement(
          "li",
          null,
          props.list.toDo
        )
      )
    )
  );
};

window.ToDoList = ToDoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0LmpzeCJdLCJuYW1lcyI6WyJUb0RvTGlzdCIsInByb3BzIiwiZSIsImRlbGV0ZVRvRG9MaXN0IiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwibGlzdCIsIl9pZCIsInRvRG8iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLEtBQUQ7QUFBQSxTQUNiO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFJLElBQUcsUUFBUDtBQUNFO0FBQUE7QUFBQSxVQUFLLFNBQVMsaUJBQUNDLENBQUQ7QUFBQSxtQkFBT0QsTUFBTUUsY0FBTixDQUFxQkQsRUFBRUUsTUFBRixDQUFTQyxTQUE5QixFQUF5Q0osTUFBTUssSUFBTixDQUFXQyxHQUFwRCxDQUFQO0FBQUEsV0FBZDtBQUNFO0FBQUE7QUFBQTtBQUFLTixnQkFBTUssSUFBTixDQUFXRTtBQUFoQjtBQURGO0FBREY7QUFERixHQURhO0FBQUEsQ0FBZjs7QUFVQUMsT0FBT1QsUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiVG9Eb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG9Eb0xpc3QgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHVsIGlkPVwiZG9MaXN0XCI+XHJcbiAgICAgIDxkaXYgb25DbGljaz17KGUpID0+IHByb3BzLmRlbGV0ZVRvRG9MaXN0KGUudGFyZ2V0LmlubmVySFRNTCwgcHJvcHMubGlzdC5faWQpfT5cclxuICAgICAgICA8bGk+e3Byb3BzLmxpc3QudG9Eb308L2xpPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdWw+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbndpbmRvdy5Ub0RvTGlzdCA9IFRvRG9MaXN0OyJdfQ==