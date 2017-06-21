"use strict";

var ToDoList = function ToDoList(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "ul",
      { id: "doList" },
      React.createElement(
        "li",
        null,
        props.list
      ),
      React.createElement(
        "button",
        { onClick: props.deleteToDoList },
        "Remove This"
      )
    )
  );
};

window.ToDoList = ToDoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0LmpzeCJdLCJuYW1lcyI6WyJUb0RvTGlzdCIsInByb3BzIiwibGlzdCIsImRlbGV0ZVRvRG9MaXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxLQUFEO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsUUFBSSxJQUFHLFFBQVA7QUFDRTtBQUFBO0FBQUE7QUFBS0EsY0FBTUM7QUFBWCxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQVEsU0FBU0QsTUFBTUUsY0FBdkI7QUFBQTtBQUFBO0FBRkY7QUFERixHQURhO0FBQUEsQ0FBZjs7QUFTQUMsT0FBT0osUUFBUCxHQUFrQkEsUUFBbEIiLCJmaWxlIjoiVG9Eb0xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG9Eb0xpc3QgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPHVsIGlkPVwiZG9MaXN0XCI+XHJcbiAgICAgIDxsaT57cHJvcHMubGlzdH08L2xpPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmRlbGV0ZVRvRG9MaXN0fT5SZW1vdmUgVGhpczwvYnV0dG9uPlxyXG4gICAgPC91bD5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxud2luZG93LlRvRG9MaXN0ID0gVG9Eb0xpc3Q7Il19