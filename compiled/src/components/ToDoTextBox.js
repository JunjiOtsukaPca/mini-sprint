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
    )
  );
};

window.ToDoTextBox = ToDoTextBox;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RvRG9UZXh0Qm94LmpzeCJdLCJuYW1lcyI6WyJUb0RvVGV4dEJveCIsInByb3BzIiwiZSIsImNoYW5nZUN1cnJMaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJjbGlja0N1cnJMaXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLGNBQWMsU0FBZEEsV0FBYyxDQUFDQyxLQUFEO0FBQUEsU0FDaEI7QUFBQTtBQUFBO0FBQ0UsbUNBQU8sV0FBVSxZQUFqQixFQUE4QixNQUFLLE1BQW5DLEVBQTBDLFVBQVUsa0JBQUNDLENBQUQ7QUFBQSxlQUFPRCxNQUFNRSxjQUFOLENBQXFCRCxFQUFFRSxNQUFGLENBQVNDLEtBQTlCLENBQVA7QUFBQSxPQUFwRCxHQURGO0FBRUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxRQUFiLEVBQXNCLFNBQVMsaUJBQUNILENBQUQ7QUFBQSxpQkFBT0QsTUFBTUssYUFBTixDQUFvQkosRUFBRUUsTUFBRixDQUFTQyxLQUE3QixDQUFQO0FBQUEsU0FBL0I7QUFBQTtBQUFBO0FBRkYsR0FEZ0I7QUFBQSxDQUFsQjs7QUFRQUUsT0FBT1AsV0FBUCxHQUFxQkEsV0FBckIiLCJmaWxlIjoiVG9Eb1RleHRCb3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgVG9Eb1RleHRCb3ggPSAocHJvcHMpID0+IChcclxuICA8ZGl2PlxyXG4gICAgPGlucHV0IGNsYXNzTmFtZT1cInN1Ym1pdExpc3RcIiB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXsoZSkgPT4gcHJvcHMuY2hhbmdlQ3Vyckxpc3QoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSkgPT4gcHJvcHMuY2xpY2tDdXJyTGlzdChlLnRhcmdldC52YWx1ZSl9PiBTdWJtaXQgPC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbilcclxuXHJcblxyXG53aW5kb3cuVG9Eb1RleHRCb3ggPSBUb0RvVGV4dEJveDsiXX0=