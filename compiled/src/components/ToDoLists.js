"use strict";

var ToDoLists = function ToDoLists(props) {
  return React.createElement(
    "div",
    null,
    props.lists.map(function (list) {
      return React.createElement(ToDoList, {
        getToDoList: props.getToDoList,
        list: list
      });
    })
  );
};

window.ToDoLists = ToDoLists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0cy5qc3giXSwibmFtZXMiOlsiVG9Eb0xpc3RzIiwicHJvcHMiLCJsaXN0cyIsIm1hcCIsImxpc3QiLCJnZXRUb0RvTGlzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0dBLFVBQU1DLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFEO0FBQUEsYUFDZixvQkFBQyxRQUFEO0FBQ0UscUJBQWFILE1BQU1JLFdBRHJCO0FBRUUsY0FBTUQ7QUFGUixRQURlO0FBQUEsS0FBaEI7QUFESCxHQURjO0FBQUEsQ0FBaEI7O0FBV0FFLE9BQU9OLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IlRvRG9MaXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb0RvTGlzdHMgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAge3Byb3BzLmxpc3RzLm1hcCgobGlzdCkgPT5cclxuICAgICAgPFRvRG9MaXN0XHJcbiAgICAgICAgZ2V0VG9Eb0xpc3Q9e3Byb3BzLmdldFRvRG9MaXN0fVxyXG4gICAgICAgIGxpc3Q9e2xpc3R9XHJcbiAgICAgIC8+XHJcbiAgICApfVxyXG4gIDwvZGl2PlxyXG4pXHJcblxyXG53aW5kb3cuVG9Eb0xpc3RzID0gVG9Eb0xpc3RzOyJdfQ==