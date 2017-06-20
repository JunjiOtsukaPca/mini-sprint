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

    console.log(props);
    _this.state = {
      // currList: window.globalList,
      currList: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'changeCurrList',
    value: function changeCurrList(list) {
      this.setState({ currList: list });
    }
  }, {
    key: 'clickCurrList',
    value: function clickCurrList() {
      //append this new list to the DOM
      var $li = $('<li>' + this.state.currList + '</li>');
      $('#doList').append($li);
      $('.submitList').val('');
    }
  }, {
    key: 'getToDoList',
    value: function getToDoList(toDo) {
      var _this2 = this;

      var options = {
        toDo: toDo
      };
      this.props.getInformation(options, function (list) {
        return _this2.setState({
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
          getToDoList: this.getToDoList.bind(this),
          lists: this.state.currList
        }),
        React.createElement(
          'div',
          null,
          React.createElement(ToDoTextBox, {
            changeCurrList: this.changeCurrList.bind(this),
            clickCurrList: this.clickCurrList.bind(this)
          })
        )
      );
    }
  }]);

  return App;
}(React.Component);
// </div>
// <div>
//   I am here
// </div>
// <div>
//   <ToDoList />
// </div>


window.App = App;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJjdXJyTGlzdCIsImxpc3QiLCJzZXRTdGF0ZSIsIiRsaSIsIiQiLCJhcHBlbmQiLCJ2YWwiLCJ0b0RvIiwib3B0aW9ucyIsImdldEluZm9ybWF0aW9uIiwiZ2V0VG9Eb0xpc3QiLCJiaW5kIiwiY2hhbmdlQ3Vyckxpc3QiLCJjbGlja0N1cnJMaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQkMsWUFBUUMsR0FBUixDQUFZRixLQUFaO0FBQ0EsVUFBS0csS0FBTCxHQUFhO0FBQ1g7QUFDQUMsZ0JBQVU7QUFGQyxLQUFiO0FBSGlCO0FBT2xCOzs7O21DQUNjQyxJLEVBQU07QUFDbkIsV0FBS0MsUUFBTCxDQUFjLEVBQUNGLFVBQVVDLElBQVgsRUFBZDtBQUNEOzs7b0NBQ2U7QUFDZDtBQUNBLFVBQUlFLE1BQU1DLEVBQUUsU0FBTyxLQUFLTCxLQUFMLENBQVdDLFFBQWxCLEdBQTJCLE9BQTdCLENBQVY7QUFDQUksUUFBRSxTQUFGLEVBQWFDLE1BQWIsQ0FBb0JGLEdBQXBCO0FBQ0FDLFFBQUUsYUFBRixFQUFpQkUsR0FBakIsQ0FBcUIsRUFBckI7QUFDRDs7O2dDQUVXQyxJLEVBQU07QUFBQTs7QUFDaEIsVUFBSUMsVUFBVTtBQUNaRCxjQUFNQTtBQURNLE9BQWQ7QUFHQSxXQUFLWCxLQUFMLENBQVdhLGNBQVgsQ0FBMEJELE9BQTFCLEVBQW1DLFVBQUNQLElBQUQ7QUFBQSxlQUMvQixPQUFLQyxRQUFMLENBQWM7QUFDWkYsb0JBQVVDO0FBREUsU0FBZCxDQUQrQjtBQUFBLE9BQW5DO0FBS0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsU0FBRDtBQUNFLHVCQUFhLEtBQUtTLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBRGY7QUFFRSxpQkFBTyxLQUFLWixLQUFMLENBQVdDO0FBRnBCLFVBREY7QUFLRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxXQUFEO0FBQ0UsNEJBQWdCLEtBQUtZLGNBQUwsQ0FBb0JELElBQXBCLENBQXlCLElBQXpCLENBRGxCO0FBRUUsMkJBQWUsS0FBS0UsYUFBTCxDQUFtQkYsSUFBbkIsQ0FBd0IsSUFBeEI7QUFGakI7QUFERjtBQUxGLE9BREY7QUFlRDs7OztFQTlDZUcsTUFBTUMsUztBQWdEbEI7QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNSQyxPQUFPckIsR0FBUCxHQUFhQSxHQUFiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIGN1cnJMaXN0OiB3aW5kb3cuZ2xvYmFsTGlzdCxcclxuICAgICAgY3Vyckxpc3Q6ICcnLFxyXG4gICAgfVxyXG4gIH1cclxuICBjaGFuZ2VDdXJyTGlzdChsaXN0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXJyTGlzdDogbGlzdH0pO1xyXG4gIH1cclxuICBjbGlja0N1cnJMaXN0KCkge1xyXG4gICAgLy9hcHBlbmQgdGhpcyBuZXcgbGlzdCB0byB0aGUgRE9NXHJcbiAgICB2YXIgJGxpID0gJCgnPGxpPicrdGhpcy5zdGF0ZS5jdXJyTGlzdCsnPC9saT4nKTtcclxuICAgICQoJyNkb0xpc3QnKS5hcHBlbmQoJGxpKTtcclxuICAgICQoJy5zdWJtaXRMaXN0JykudmFsKCcnKTtcclxuICB9XHJcblxyXG4gIGdldFRvRG9MaXN0KHRvRG8pIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0b0RvXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLmdldEluZm9ybWF0aW9uKG9wdGlvbnMsIChsaXN0KSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3Vyckxpc3Q6IGxpc3QsXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRvRG9MaXN0c1xyXG4gICAgICAgICAgZ2V0VG9Eb0xpc3Q9e3RoaXMuZ2V0VG9Eb0xpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGxpc3RzPXt0aGlzLnN0YXRlLmN1cnJMaXN0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUb0RvVGV4dEJveFxyXG4gICAgICAgICAgICBjaGFuZ2VDdXJyTGlzdD17dGhpcy5jaGFuZ2VDdXJyTGlzdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBjbGlja0N1cnJMaXN0PXt0aGlzLmNsaWNrQ3Vyckxpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxuICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIEkgYW0gaGVyZVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICA8VG9Eb0xpc3QgLz5cclxuICAgICAgICAvLyA8L2Rpdj5cclxud2luZG93LkFwcCA9IEFwcDtcclxuLy8gPGRpdj5cclxuLy8gICA8TmF2IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFlvdXR1YmVWaWRlb3MuYmluZCh0aGlzKX1cclxuLy8gICAvPlxyXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuLy8gICAgIDxWaWRlb1BsYXllclxyXG4vLyAgICAgICB2aWRlbz17dGhpcy5zdGF0ZS5jdXJWaWRlb31cclxuLy8gICAgICAgcmVuZGVyRnhuPXt0aGlzLmNhbGxSZW5kZXIuYmluZCh0aGlzKX1cclxuLy8gICAgIC8+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4vLyAgICAgPFZpZGVvTGlzdFxyXG4vLyAgICAgICB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfVxyXG4vLyAgICAgICByZW5kZXJGeG49e3RoaXMuY2FsbFJlbmRlci5iaW5kKHRoaXMpfVxyXG4vLyAgICAgLz5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9kaXY+Il19