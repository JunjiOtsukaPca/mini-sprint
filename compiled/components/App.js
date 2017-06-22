'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      // currList: window.globalList,
      currList: [
        // 'car',
        // 'cat',
        // 'cam'
      ],
      searchValue: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      console.log('page loaded');

      this.props.getInformation(function (list) {
        // var newList = list.map((object) => object.toDo);
        _this2.setState({
          currList: list
        });
      });
    }
    //this is changing to strings

  }, {
    key: 'changeCurrList',
    value: function changeCurrList(list) {
      console.log(list);
      this.setState({ searchValue: list });
    }
  }, {
    key: 'postToDoList',
    value: function postToDoList() {
      var _this3 = this;

      var options = {
        toDo: this.state.searchValue
        // var context = this
      };this.props.postInformation(options, function (list) {
        _this3.state.currList.push(list.toDo);
        var newlist = _this3.state.currList;
        _this3.setState({
          currList: newlist
        });
      });
    }
  }, {
    key: 'deleteToDoList',
    value: function deleteToDoList(toDo, toDoId) {
      var _this4 = this;

      console.log(toDo, toDoId);
      var options = {
        toDo: toDo,
        toDoId: toDoId
      };
      this.props.deleteInformation(options, function (list) {
        return _this4.setState({
          currList: list
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(ToDoLists, {
          deleteToDoList: this.deleteToDoList.bind(this),
          lists: this.state.currList
        }),
        React.createElement(
          'div',
          null,
          React.createElement(ToDoTextBox, {
            changeCurrList: this.changeCurrList.bind(this),
            postToDoList: this.postToDoList.bind(this)
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);

window.App = App;
// </div>
// <div>
//   I am here
// </div>
// <div>
//   <ToDoList />
// </div>
// <div>
//   <Nav handleSearchInputChange={this.getYoutubeVideos.bind(this)}
//   />
//   <div className="col-md-7">
//     <VideoPlayer
//       video={this.state.curVideo}
//       renderFxn={this.callRender.bind(this)}
//     />
//   </div>
//   <div className="col-md-5">
//     <VideoList
//       videos={this.state.videos}
//       renderFxn={this.callRender.bind(this)}
//     />
//   </div>
// </div>
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJMaXN0Iiwic2VhcmNoVmFsdWUiLCJjb25zb2xlIiwibG9nIiwiZ2V0SW5mb3JtYXRpb24iLCJsaXN0Iiwic2V0U3RhdGUiLCJvcHRpb25zIiwidG9EbyIsInBvc3RJbmZvcm1hdGlvbiIsInB1c2giLCJuZXdsaXN0IiwidG9Eb0lkIiwiZGVsZXRlSW5mb3JtYXRpb24iLCJkZWxldGVUb0RvTGlzdCIsImJpbmQiLCJjaGFuZ2VDdXJyTGlzdCIsInBvc3RUb0RvTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1g7QUFDQUMsZ0JBQVU7QUFDUjtBQUNBO0FBQ0E7QUFIUSxPQUZDO0FBT1hDLG1CQUFhO0FBUEYsS0FBYjtBQUZpQjtBQVdsQjs7Ozt3Q0FFbUI7QUFBQTs7QUFDbEJDLGNBQVFDLEdBQVIsQ0FBWSxhQUFaOztBQUVBLFdBQUtMLEtBQUwsQ0FBV00sY0FBWCxDQUEwQixVQUFDQyxJQUFELEVBQVU7QUFDbEM7QUFDRSxlQUFLQyxRQUFMLENBQWM7QUFDWk4sb0JBQVVLO0FBREUsU0FBZDtBQUdELE9BTEg7QUFNRDtBQUNEOzs7O21DQUNlQSxJLEVBQU07QUFDbkJILGNBQVFDLEdBQVIsQ0FBWUUsSUFBWjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDTCxhQUFhSSxJQUFkLEVBQWQ7QUFDRDs7O21DQUdjO0FBQUE7O0FBQ2IsVUFBSUUsVUFBVTtBQUNaQyxjQUFNLEtBQUtULEtBQUwsQ0FBV0U7QUFFbkI7QUFIYyxPQUFkLENBSUEsS0FBS0gsS0FBTCxDQUFXVyxlQUFYLENBQTJCRixPQUEzQixFQUFvQyxVQUFDRixJQUFELEVBQVU7QUFDMUMsZUFBS04sS0FBTCxDQUFXQyxRQUFYLENBQW9CVSxJQUFwQixDQUF5QkwsS0FBS0csSUFBOUI7QUFDQSxZQUFJRyxVQUFVLE9BQUtaLEtBQUwsQ0FBV0MsUUFBekI7QUFDQSxlQUFLTSxRQUFMLENBQWM7QUFDWk4sb0JBQVVXO0FBREUsU0FBZDtBQUdILE9BTkQ7QUFPRDs7O21DQUVjSCxJLEVBQU1JLE0sRUFBUTtBQUFBOztBQUMzQlYsY0FBUUMsR0FBUixDQUFZSyxJQUFaLEVBQWtCSSxNQUFsQjtBQUNBLFVBQUlMLFVBQVU7QUFDWkMsY0FBTUEsSUFETTtBQUVaSSxnQkFBUUE7QUFGSSxPQUFkO0FBSUEsV0FBS2QsS0FBTCxDQUFXZSxpQkFBWCxDQUE2Qk4sT0FBN0IsRUFBc0MsVUFBQ0YsSUFBRDtBQUFBLGVBQ2xDLE9BQUtDLFFBQUwsQ0FBYztBQUNaTixvQkFBVUs7QUFERSxTQUFkLENBRGtDO0FBQUEsT0FBdEM7QUFLRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxTQUFEO0FBQ0UsMEJBQWdCLEtBQUtTLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBRGxCO0FBRUUsaUJBQU8sS0FBS2hCLEtBQUwsQ0FBV0M7QUFGcEIsVUFERjtBQUtFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFdBQUQ7QUFDRSw0QkFBZ0IsS0FBS2dCLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBRGxCO0FBRUUsMEJBQWMsS0FBS0UsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkI7QUFGaEI7QUFERjtBQUxGLE9BREY7QUFlRDs7OztFQTFFZUcsTUFBTUMsUzs7QUE0RXhCQyxPQUFPdkIsR0FBUCxHQUFhQSxHQUFiO0FBQ007QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIGN1cnJMaXN0OiB3aW5kb3cuZ2xvYmFsTGlzdCxcclxuICAgICAgY3Vyckxpc3Q6IFtcclxuICAgICAgICAvLyAnY2FyJyxcclxuICAgICAgICAvLyAnY2F0JyxcclxuICAgICAgICAvLyAnY2FtJ1xyXG4gICAgICBdLFxyXG4gICAgICBzZWFyY2hWYWx1ZTogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc29sZS5sb2coJ3BhZ2UgbG9hZGVkJylcclxuXHJcbiAgICB0aGlzLnByb3BzLmdldEluZm9ybWF0aW9uKChsaXN0KSA9PiB7XHJcbiAgICAgIC8vIHZhciBuZXdMaXN0ID0gbGlzdC5tYXAoKG9iamVjdCkgPT4gb2JqZWN0LnRvRG8pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3Vyckxpc3Q6IGxpc3QsXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICB9XHJcbiAgLy90aGlzIGlzIGNoYW5naW5nIHRvIHN0cmluZ3NcclxuICBjaGFuZ2VDdXJyTGlzdChsaXN0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGxpc3R9KTtcclxuICB9XHJcblxyXG5cclxuICBwb3N0VG9Eb0xpc3QoKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgdG9EbzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxyXG4gICAgfVxyXG4gICAgLy8gdmFyIGNvbnRleHQgPSB0aGlzXHJcbiAgICB0aGlzLnByb3BzLnBvc3RJbmZvcm1hdGlvbihvcHRpb25zLCAobGlzdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdGUuY3Vyckxpc3QucHVzaChsaXN0LnRvRG8pXHJcbiAgICAgICAgdmFyIG5ld2xpc3QgPSB0aGlzLnN0YXRlLmN1cnJMaXN0XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBjdXJyTGlzdDogbmV3bGlzdCxcclxuICAgICAgICB9KVxyXG4gICAgfSApXHJcbiAgfVxyXG5cclxuICBkZWxldGVUb0RvTGlzdCh0b0RvLCB0b0RvSWQpIHtcclxuICAgIGNvbnNvbGUubG9nKHRvRG8sIHRvRG9JZClcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0b0RvLFxyXG4gICAgICB0b0RvSWQ6IHRvRG9JZFxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5kZWxldGVJbmZvcm1hdGlvbihvcHRpb25zLCAobGlzdCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJMaXN0OiBsaXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUb0RvTGlzdHNcclxuICAgICAgICAgIGRlbGV0ZVRvRG9MaXN0PXt0aGlzLmRlbGV0ZVRvRG9MaXN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBsaXN0cz17dGhpcy5zdGF0ZS5jdXJyTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VG9Eb1RleHRCb3hcclxuICAgICAgICAgICAgY2hhbmdlQ3Vyckxpc3Q9e3RoaXMuY2hhbmdlQ3Vyckxpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgcG9zdFRvRG9MaXN0PXt0aGlzLnBvc3RUb0RvTGlzdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxufVxyXG53aW5kb3cuQXBwID0gQXBwO1xyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgIC8vICAgSSBhbSBoZXJlXHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIDxUb0RvTGlzdCAvPlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4vLyA8ZGl2PlxyXG4vLyAgIDxOYXYgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2U9e3RoaXMuZ2V0WW91dHViZVZpZGVvcy5iaW5kKHRoaXMpfVxyXG4vLyAgIC8+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4vLyAgICAgPFZpZGVvUGxheWVyXHJcbi8vICAgICAgIHZpZGVvPXt0aGlzLnN0YXRlLmN1clZpZGVvfVxyXG4vLyAgICAgICByZW5kZXJGeG49e3RoaXMuY2FsbFJlbmRlci5iaW5kKHRoaXMpfVxyXG4vLyAgICAgLz5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbi8vICAgICA8VmlkZW9MaXN0XHJcbi8vICAgICAgIHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9XHJcbi8vICAgICAgIHJlbmRlckZ4bj17dGhpcy5jYWxsUmVuZGVyLmJpbmQodGhpcyl9XHJcbi8vICAgICAvPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyA8L2Rpdj4iXX0=