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
      )
    )
  );
};

window.ToDoList = ToDoList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0LmpzeCJdLCJuYW1lcyI6WyJUb0RvTGlzdCIsInByb3BzIiwibGlzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLFFBQUksSUFBRyxRQUFQO0FBQ0U7QUFBQTtBQUFBO0FBQUtBLGNBQU1DO0FBQVg7QUFERjtBQURGLEdBRGE7QUFBQSxDQUFmOztBQVFBQyxPQUFPSCxRQUFQLEdBQWtCQSxRQUFsQiIsImZpbGUiOiJUb0RvTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb0RvTGlzdCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8dWwgaWQ9XCJkb0xpc3RcIj5cclxuICAgICAgPGxpPntwcm9wcy5saXN0fTwvbGk+XHJcbiAgICA8L3VsPlxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG53aW5kb3cuVG9Eb0xpc3QgPSBUb0RvTGlzdDsiXX0=