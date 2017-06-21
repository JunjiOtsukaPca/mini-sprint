"use strict";

var ToDoLists = function ToDoLists(props) {
  return React.createElement(
    "div",
    null,
    props.lists.map(function (list) {
      return React.createElement(ToDoList, {
        getToDoList: props.getToDoList,
        list: list,
        deleteToDoList: props.deleteToDoList
      });
    })
  );
};

window.ToDoLists = ToDoLists;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0cy5qc3giXSwibmFtZXMiOlsiVG9Eb0xpc3RzIiwicHJvcHMiLCJsaXN0cyIsIm1hcCIsImxpc3QiLCJnZXRUb0RvTGlzdCIsImRlbGV0ZVRvRG9MaXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFlBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFEO0FBQUEsU0FDZDtBQUFBO0FBQUE7QUFDR0EsVUFBTUMsS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQ7QUFBQSxhQUNmLG9CQUFDLFFBQUQ7QUFDRSxxQkFBYUgsTUFBTUksV0FEckI7QUFFRSxjQUFNRCxJQUZSO0FBR0Usd0JBQWdCSCxNQUFNSztBQUh4QixRQURlO0FBQUEsS0FBaEI7QUFESCxHQURjO0FBQUEsQ0FBaEI7O0FBWUFDLE9BQU9QLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IlRvRG9MaXN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb0RvTGlzdHMgPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAge3Byb3BzLmxpc3RzLm1hcCgobGlzdCkgPT5cclxuICAgICAgPFRvRG9MaXN0XHJcbiAgICAgICAgZ2V0VG9Eb0xpc3Q9e3Byb3BzLmdldFRvRG9MaXN0fVxyXG4gICAgICAgIGxpc3Q9e2xpc3R9XHJcbiAgICAgICAgZGVsZXRlVG9Eb0xpc3Q9e3Byb3BzLmRlbGV0ZVRvRG9MaXN0fVxyXG4gICAgICAvPlxyXG4gICAgKX1cclxuICA8L2Rpdj5cclxuKVxyXG5cclxud2luZG93LlRvRG9MaXN0cyA9IFRvRG9MaXN0czsiXX0=