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
          getToDoList: this.getToDoList.bing(this),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJjdXJyTGlzdCIsImxpc3QiLCJzZXRTdGF0ZSIsIiRsaSIsIiQiLCJhcHBlbmQiLCJ2YWwiLCJ0b0RvIiwib3B0aW9ucyIsImdldEluZm9ybWF0aW9uIiwiZ2V0VG9Eb0xpc3QiLCJiaW5nIiwiY2hhbmdlQ3Vyckxpc3QiLCJiaW5kIiwiY2xpY2tDdXJyTGlzdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakJDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFVBQUtHLEtBQUwsR0FBYTtBQUNYO0FBQ0FDLGdCQUFVO0FBRkMsS0FBYjtBQUhpQjtBQU9sQjs7OzttQ0FDY0MsSSxFQUFNO0FBQ25CLFdBQUtDLFFBQUwsQ0FBYyxFQUFDRixVQUFVQyxJQUFYLEVBQWQ7QUFDRDs7O29DQUNlO0FBQ2Q7QUFDQSxVQUFJRSxNQUFNQyxFQUFFLFNBQU8sS0FBS0wsS0FBTCxDQUFXQyxRQUFsQixHQUEyQixPQUE3QixDQUFWO0FBQ0FJLFFBQUUsU0FBRixFQUFhQyxNQUFiLENBQW9CRixHQUFwQjtBQUNBQyxRQUFFLGFBQUYsRUFBaUJFLEdBQWpCLENBQXFCLEVBQXJCO0FBQ0Q7OztnQ0FFV0MsSSxFQUFNO0FBQUE7O0FBQ2hCLFVBQUlDLFVBQVU7QUFDWkQsY0FBTUE7QUFETSxPQUFkO0FBR0EsV0FBS1gsS0FBTCxDQUFXYSxjQUFYLENBQTBCRCxPQUExQixFQUFtQyxVQUFDUCxJQUFEO0FBQUEsZUFDL0IsT0FBS0MsUUFBTCxDQUFjO0FBQ1pGLG9CQUFVQztBQURFLFNBQWQsQ0FEK0I7QUFBQSxPQUFuQztBQUtEOzs7NkJBRVM7QUFDUixhQUNFO0FBQUE7QUFBQTtBQUNFLDRCQUFDLFNBQUQ7QUFDRSx1QkFBYSxLQUFLUyxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQURmO0FBRUUsaUJBQU8sS0FBS1osS0FBTCxDQUFXQztBQUZwQixVQURGO0FBS0U7QUFBQTtBQUFBO0FBQ0UsOEJBQUMsV0FBRDtBQUNFLDRCQUFnQixLQUFLWSxjQUFMLENBQW9CQyxJQUFwQixDQUF5QixJQUF6QixDQURsQjtBQUVFLDJCQUFlLEtBQUtDLGFBQUwsQ0FBbUJELElBQW5CLENBQXdCLElBQXhCO0FBRmpCO0FBREY7QUFMRixPQURGO0FBZUQ7Ozs7RUE5Q2VFLE1BQU1DLFM7QUFnRGxCO0FBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDUkMsT0FBT3RCLEdBQVAsR0FBYUEsR0FBYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvLyBjdXJyTGlzdDogd2luZG93Lmdsb2JhbExpc3QsXHJcbiAgICAgIGN1cnJMaXN0OiAnJyxcclxuICAgIH1cclxuICB9XHJcbiAgY2hhbmdlQ3Vyckxpc3QobGlzdCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3Vyckxpc3Q6IGxpc3R9KTtcclxuICB9XHJcbiAgY2xpY2tDdXJyTGlzdCgpIHtcclxuICAgIC8vYXBwZW5kIHRoaXMgbmV3IGxpc3QgdG8gdGhlIERPTVxyXG4gICAgdmFyICRsaSA9ICQoJzxsaT4nK3RoaXMuc3RhdGUuY3Vyckxpc3QrJzwvbGk+Jyk7XHJcbiAgICAkKCcjZG9MaXN0JykuYXBwZW5kKCRsaSk7XHJcbiAgICAkKCcuc3VibWl0TGlzdCcpLnZhbCgnJyk7XHJcbiAgfVxyXG5cclxuICBnZXRUb0RvTGlzdCh0b0RvKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgdG9EbzogdG9Eb1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5nZXRJbmZvcm1hdGlvbihvcHRpb25zLCAobGlzdCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJMaXN0OiBsaXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxUb0RvTGlzdHNcclxuICAgICAgICAgIGdldFRvRG9MaXN0PXt0aGlzLmdldFRvRG9MaXN0LmJpbmcodGhpcyl9XHJcbiAgICAgICAgICBsaXN0cz17dGhpcy5zdGF0ZS5jdXJyTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VG9Eb1RleHRCb3hcclxuICAgICAgICAgICAgY2hhbmdlQ3Vyckxpc3Q9e3RoaXMuY2hhbmdlQ3Vyckxpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgY2xpY2tDdXJyTGlzdD17dGhpcy5jbGlja0N1cnJMaXN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbiAgfVxyXG59XHJcbiAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICBJIGFtIGhlcmVcclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgIC8vICAgPFRvRG9MaXN0IC8+XHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbndpbmRvdy5BcHAgPSBBcHA7XHJcbi8vIDxkaXY+XHJcbi8vICAgPE5hdiBoYW5kbGVTZWFyY2hJbnB1dENoYW5nZT17dGhpcy5nZXRZb3V0dWJlVmlkZW9zLmJpbmQodGhpcyl9XHJcbi8vICAgLz5cclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC03XCI+XHJcbi8vICAgICA8VmlkZW9QbGF5ZXJcclxuLy8gICAgICAgdmlkZW89e3RoaXMuc3RhdGUuY3VyVmlkZW99XHJcbi8vICAgICAgIHJlbmRlckZ4bj17dGhpcy5jYWxsUmVuZGVyLmJpbmQodGhpcyl9XHJcbi8vICAgICAvPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTVcIj5cclxuLy8gICAgIDxWaWRlb0xpc3RcclxuLy8gICAgICAgdmlkZW9zPXt0aGlzLnN0YXRlLnZpZGVvc31cclxuLy8gICAgICAgcmVuZGVyRnhuPXt0aGlzLmNhbGxSZW5kZXIuYmluZCh0aGlzKX1cclxuLy8gICAgIC8+XHJcbi8vICAgPC9kaXY+XHJcbi8vIDwvZGl2PiJdfQ==