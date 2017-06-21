"use strict";

var ToDoTextBox = function ToDoTextBox(props) {
  return React.createElement(
    "div",
    null,
    React.createElement("input", { className: "submitList", type: "text", onChange: function onChange(e) {
        return props.changeCurrList(e.target.value);
      } }),
    React.createElement(
      "button",
      { type: "submit", onClick: function onClick(e) {
          return props.clickCurrList(e.target.value);
        } },
      " Submit "
    ),
    React.createElement(
      "button",
      { type: "submit", onClick: function onClick(e) {
          return props.postToDoList(e.target.value);
        } },
      " Post "
    )
  );
};

window.ToDoTextBox = ToDoTextBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9UZXh0Qm94LmpzeCJdLCJuYW1lcyI6WyJUb0RvVGV4dEJveCIsInByb3BzIiwiZSIsImNoYW5nZUN1cnJMaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJjbGlja0N1cnJMaXN0IiwicG9zdFRvRG9MaXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDaEI7QUFBQTtBQUFBO0FBQ0UsbUNBQU8sV0FBVSxZQUFqQixFQUE4QixNQUFLLE1BQW5DLEVBQTBDLFVBQVUsa0JBQUNDLENBQUQ7QUFBQSxlQUFPRCxNQUFNRSxjQUFOLENBQXFCRCxFQUFFRSxNQUFGLENBQVNDLEtBQTlCLENBQVA7QUFBQSxPQUFwRCxHQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsaUJBQUNILENBQUQ7QUFBQSxpQkFBT0QsTUFBTUssYUFBTixDQUFvQkosRUFBRUUsTUFBRixDQUFTQyxLQUE3QixDQUFQO0FBQUEsU0FBL0I7QUFBQTtBQUFBLEtBRkY7QUFHRTtBQUFBO0FBQUEsUUFBUSxNQUFLLFFBQWIsRUFBc0IsU0FBUyxpQkFBQ0gsQ0FBRDtBQUFBLGlCQUFPRCxNQUFNTSxZQUFOLENBQW1CTCxFQUFFRSxNQUFGLENBQVNDLEtBQTVCLENBQVA7QUFBQSxTQUEvQjtBQUFBO0FBQUE7QUFIRixHQURnQjtBQUFBLENBQWxCOztBQVNBRyxPQUFPUixXQUFQLEdBQXFCQSxXQUFyQiIsImZpbGUiOiJUb0RvVGV4dEJveC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBUb0RvVGV4dEJveCA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8aW5wdXQgY2xhc3NOYW1lPVwic3VibWl0TGlzdFwiIHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9eyhlKSA9PiBwcm9wcy5jaGFuZ2VDdXJyTGlzdChlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5jbGlja0N1cnJMaXN0KGUudGFyZ2V0LnZhbHVlKX0+IFN1Ym1pdCA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKSA9PiBwcm9wcy5wb3N0VG9Eb0xpc3QoZS50YXJnZXQudmFsdWUpfT4gUG9zdCA8L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuXHJcbndpbmRvdy5Ub0RvVGV4dEJveCA9IFRvRG9UZXh0Qm94OyJdfQ==