"use strict";

var ToDoLists = function ToDoLists(props) {
  return React.createElement(
    "div",
    null,
    console.log(props.lists),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9MaXN0cy5qc3giXSwibmFtZXMiOlsiVG9Eb0xpc3RzIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwibGlzdHMiLCJtYXAiLCJsaXN0IiwiZ2V0VG9Eb0xpc3QiLCJkZWxldGVUb0RvTGlzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Q7QUFBQTtBQUFBO0FBQ0NDLFlBQVFDLEdBQVIsQ0FBWUYsTUFBTUcsS0FBbEIsQ0FERDtBQUVHSCxVQUFNRyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRDtBQUFBLGFBQ2Ysb0JBQUMsUUFBRDtBQUNFLHFCQUFhTCxNQUFNTSxXQURyQjtBQUVFLGNBQU1ELElBRlI7QUFHRSx3QkFBZ0JMLE1BQU1PO0FBSHhCLFFBRGU7QUFBQSxLQUFoQjtBQUZILEdBRGM7QUFBQSxDQUFoQjs7QUFhQUMsT0FBT1QsU0FBUCxHQUFtQkEsU0FBbkIiLCJmaWxlIjoiVG9Eb0xpc3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFRvRG9MaXN0cyA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAge2NvbnNvbGUubG9nKHByb3BzLmxpc3RzKX1cclxuICAgIHtwcm9wcy5saXN0cy5tYXAoKGxpc3QpID0+XHJcbiAgICAgIDxUb0RvTGlzdFxyXG4gICAgICAgIGdldFRvRG9MaXN0PXtwcm9wcy5nZXRUb0RvTGlzdH1cclxuICAgICAgICBsaXN0PXtsaXN0fVxyXG4gICAgICAgIGRlbGV0ZVRvRG9MaXN0PXtwcm9wcy5kZWxldGVUb0RvTGlzdH1cclxuICAgICAgLz5cclxuICAgICl9XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcbndpbmRvdy5Ub0RvTGlzdHMgPSBUb0RvTGlzdHM7Il19