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
    key: 'getAll',
    value: function getAll() {
      var _this2 = this;

      this.props.getInformation(function (list) {
        _this2.setState({
          currList: list
        });
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getAll();
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
      };
      this.props.postInformation(options, function (list) {
        _this3.state.currList.push(list);
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

      var options = {
        toDo: toDo,
        toDoId: toDoId
      };
      this.props.deleteInformation(options, function (list) {
        _this4.getAll();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJMaXN0Iiwic2VhcmNoVmFsdWUiLCJnZXRJbmZvcm1hdGlvbiIsImxpc3QiLCJzZXRTdGF0ZSIsImdldEFsbCIsImNvbnNvbGUiLCJsb2ciLCJvcHRpb25zIiwidG9EbyIsInBvc3RJbmZvcm1hdGlvbiIsInB1c2giLCJuZXdsaXN0IiwidG9Eb0lkIiwiZGVsZXRlSW5mb3JtYXRpb24iLCJkZWxldGVUb0RvTGlzdCIsImJpbmQiLCJjaGFuZ2VDdXJyTGlzdCIsInBvc3RUb0RvTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1g7QUFDQUMsZ0JBQVU7QUFDUjtBQUNBO0FBQ0E7QUFIUSxPQUZDO0FBT1hDLG1CQUFhO0FBUEYsS0FBYjtBQUZpQjtBQVdsQjs7Ozs2QkFFUTtBQUFBOztBQUNQLFdBQUtILEtBQUwsQ0FBV0ksY0FBWCxDQUEwQixVQUFDQyxJQUFELEVBQVU7QUFDbEMsZUFBS0MsUUFBTCxDQUFjO0FBQ1pKLG9CQUFVRztBQURFLFNBQWQ7QUFHRCxPQUpEO0FBS0Q7Ozt3Q0FFbUI7QUFDbEIsV0FBS0UsTUFBTDtBQUNEOztBQUVEOzs7O21DQUNlRixJLEVBQU07QUFDbkJHLGNBQVFDLEdBQVIsQ0FBWUosSUFBWjtBQUNBLFdBQUtDLFFBQUwsQ0FBYyxFQUFDSCxhQUFhRSxJQUFkLEVBQWQ7QUFDRDs7O21DQUdjO0FBQUE7O0FBQ2IsVUFBSUssVUFBVTtBQUNaQyxjQUFNLEtBQUtWLEtBQUwsQ0FBV0U7QUFETCxPQUFkO0FBR0EsV0FBS0gsS0FBTCxDQUFXWSxlQUFYLENBQTJCRixPQUEzQixFQUFvQyxVQUFDTCxJQUFELEVBQVU7QUFDNUMsZUFBS0osS0FBTCxDQUFXQyxRQUFYLENBQW9CVyxJQUFwQixDQUF5QlIsSUFBekI7QUFDQSxZQUFJUyxVQUFVLE9BQUtiLEtBQUwsQ0FBV0MsUUFBekI7QUFDQSxlQUFLSSxRQUFMLENBQWM7QUFDWkosb0JBQVVZO0FBREUsU0FBZDtBQUdELE9BTkQ7QUFPRDs7O21DQUVjSCxJLEVBQU1JLE0sRUFBUTtBQUFBOztBQUMzQixVQUFJTCxVQUFVO0FBQ1pDLGNBQU1BLElBRE07QUFFWkksZ0JBQVFBO0FBRkksT0FBZDtBQUlBLFdBQUtmLEtBQUwsQ0FBV2dCLGlCQUFYLENBQTZCTixPQUE3QixFQUFzQyxVQUFDTCxJQUFELEVBQVU7QUFDOUMsZUFBS0UsTUFBTDtBQUNELE9BRkQ7QUFHRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxTQUFEO0FBQ0UsMEJBQWdCLEtBQUtVLGNBQUwsQ0FBb0JDLElBQXBCLENBQXlCLElBQXpCLENBRGxCO0FBRUUsaUJBQU8sS0FBS2pCLEtBQUwsQ0FBV0M7QUFGcEIsVUFERjtBQUtFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFdBQUQ7QUFDRSw0QkFBZ0IsS0FBS2lCLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBRGxCO0FBRUUsMEJBQWMsS0FBS0UsWUFBTCxDQUFrQkYsSUFBbEIsQ0FBdUIsSUFBdkI7QUFGaEI7QUFERjtBQUxGLE9BREY7QUFlRDs7OztFQXhFZUcsTUFBTUMsUzs7QUEwRXhCQyxPQUFPeEIsR0FBUCxHQUFhQSxHQUFiO0FBQ007QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIGN1cnJMaXN0OiB3aW5kb3cuZ2xvYmFsTGlzdCxcclxuICAgICAgY3Vyckxpc3Q6IFtcclxuICAgICAgICAvLyAnY2FyJyxcclxuICAgICAgICAvLyAnY2F0JyxcclxuICAgICAgICAvLyAnY2FtJ1xyXG4gICAgICBdLFxyXG4gICAgICBzZWFyY2hWYWx1ZTogJydcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEFsbCgpIHtcclxuICAgIHRoaXMucHJvcHMuZ2V0SW5mb3JtYXRpb24oKGxpc3QpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY3Vyckxpc3Q6IGxpc3QsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldEFsbCgpO1xyXG4gIH1cclxuXHJcbiAgLy90aGlzIGlzIGNoYW5naW5nIHRvIHN0cmluZ3NcclxuICBjaGFuZ2VDdXJyTGlzdChsaXN0KSB7XHJcbiAgICBjb25zb2xlLmxvZyhsaXN0KVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoVmFsdWU6IGxpc3R9KTtcclxuICB9XHJcblxyXG5cclxuICBwb3N0VG9Eb0xpc3QoKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgdG9EbzogdGhpcy5zdGF0ZS5zZWFyY2hWYWx1ZVxyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5wb3N0SW5mb3JtYXRpb24ob3B0aW9ucywgKGxpc3QpID0+IHtcclxuICAgICAgdGhpcy5zdGF0ZS5jdXJyTGlzdC5wdXNoKGxpc3QpXHJcbiAgICAgIHZhciBuZXdsaXN0ID0gdGhpcy5zdGF0ZS5jdXJyTGlzdDtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgY3Vyckxpc3Q6IG5ld2xpc3QsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZGVsZXRlVG9Eb0xpc3QodG9EbywgdG9Eb0lkKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgdG9EbzogdG9EbyxcclxuICAgICAgdG9Eb0lkOiB0b0RvSWRcclxuICAgIH1cclxuICAgIHRoaXMucHJvcHMuZGVsZXRlSW5mb3JtYXRpb24ob3B0aW9ucywgKGxpc3QpID0+IHtcclxuICAgICAgdGhpcy5nZXRBbGwoKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZW5kZXIgKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8VG9Eb0xpc3RzXHJcbiAgICAgICAgICBkZWxldGVUb0RvTGlzdD17dGhpcy5kZWxldGVUb0RvTGlzdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgbGlzdHM9e3RoaXMuc3RhdGUuY3Vyckxpc3R9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPFRvRG9UZXh0Qm94XHJcbiAgICAgICAgICAgIGNoYW5nZUN1cnJMaXN0PXt0aGlzLmNoYW5nZUN1cnJMaXN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIHBvc3RUb0RvTGlzdD17dGhpcy5wb3N0VG9Eb0xpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxud2luZG93LkFwcCA9IEFwcDtcclxuICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIEkgYW0gaGVyZVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICA8VG9Eb0xpc3QgLz5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuLy8gPGRpdj5cclxuLy8gICA8TmF2IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFlvdXR1YmVWaWRlb3MuYmluZCh0aGlzKX1cclxuLy8gICAvPlxyXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuLy8gICAgIDxWaWRlb1BsYXllclxyXG4vLyAgICAgICB2aWRlbz17dGhpcy5zdGF0ZS5jdXJWaWRlb31cclxuLy8gICAgICAgcmVuZGVyRnhuPXt0aGlzLmNhbGxSZW5kZXIuYmluZCh0aGlzKX1cclxuLy8gICAgIC8+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4vLyAgICAgPFZpZGVvTGlzdFxyXG4vLyAgICAgICB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfVxyXG4vLyAgICAgICByZW5kZXJGeG49e3RoaXMuY2FsbFJlbmRlci5iaW5kKHRoaXMpfVxyXG4vLyAgICAgLz5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9kaXY+Il19