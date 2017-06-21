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
      currList: ['car', 'cat', 'cam']
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
    key: 'postToDoList',
    value: function postToDoList(toDo) {
      var _this3 = this;

      var options = {
        toDo: toDo
      };
      this.props.postInformation(options, function (list) {
        return _this3.setState({
          currList: list
        });
      });
    }
  }, {
    key: 'deleteToDoList',
    value: function deleteToDoList(toDo) {
      var _this4 = this;

      var options = {
        toDo: toDo
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
          getToDoList: this.getToDoList.bind(this),
          lists: this.state.currList
        }),
        React.createElement(
          'div',
          null,
          React.createElement(ToDoTextBox, {
            changeCurrList: this.changeCurrList.bind(this),
            clickCurrList: this.clickCurrList.bind(this),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwic3RhdGUiLCJjdXJyTGlzdCIsImxpc3QiLCJzZXRTdGF0ZSIsIiRsaSIsIiQiLCJhcHBlbmQiLCJ2YWwiLCJ0b0RvIiwib3B0aW9ucyIsImdldEluZm9ybWF0aW9uIiwicG9zdEluZm9ybWF0aW9uIiwiZGVsZXRlSW5mb3JtYXRpb24iLCJnZXRUb0RvTGlzdCIsImJpbmQiLCJjaGFuZ2VDdXJyTGlzdCIsImNsaWNrQ3Vyckxpc3QiLCJwb3N0VG9Eb0xpc3QiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCQyxZQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQSxVQUFLRyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxnQkFBVSxDQUNSLEtBRFEsRUFFUixLQUZRLEVBR1IsS0FIUTtBQUZDLEtBQWI7QUFIaUI7QUFXbEI7Ozs7bUNBRWNDLEksRUFBTTtBQUNuQixXQUFLQyxRQUFMLENBQWMsRUFBQ0YsVUFBVUMsSUFBWCxFQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkO0FBQ0EsVUFBSUUsTUFBTUMsRUFBRSxTQUFPLEtBQUtMLEtBQUwsQ0FBV0MsUUFBbEIsR0FBMkIsT0FBN0IsQ0FBVjtBQUNBSSxRQUFFLFNBQUYsRUFBYUMsTUFBYixDQUFvQkYsR0FBcEI7QUFDQUMsUUFBRSxhQUFGLEVBQWlCRSxHQUFqQixDQUFxQixFQUFyQjtBQUNEOzs7Z0NBRVdDLEksRUFBTTtBQUFBOztBQUNoQixVQUFJQyxVQUFVO0FBQ1pELGNBQU1BO0FBRE0sT0FBZDtBQUdBLFdBQUtYLEtBQUwsQ0FBV2EsY0FBWCxDQUEwQkQsT0FBMUIsRUFBbUMsVUFBQ1AsSUFBRDtBQUFBLGVBQy9CLE9BQUtDLFFBQUwsQ0FBYztBQUNaRixvQkFBVUM7QUFERSxTQUFkLENBRCtCO0FBQUEsT0FBbkM7QUFLRDs7O2lDQUVZTSxJLEVBQU07QUFBQTs7QUFDakIsVUFBSUMsVUFBVTtBQUNaRCxjQUFNQTtBQURNLE9BQWQ7QUFHQSxXQUFLWCxLQUFMLENBQVdjLGVBQVgsQ0FBMkJGLE9BQTNCLEVBQW9DLFVBQUNQLElBQUQ7QUFBQSxlQUNoQyxPQUFLQyxRQUFMLENBQWM7QUFDWkYsb0JBQVVDO0FBREUsU0FBZCxDQURnQztBQUFBLE9BQXBDO0FBS0Q7OzttQ0FFY00sSSxFQUFNO0FBQUE7O0FBQ25CLFVBQUlDLFVBQVU7QUFDWkQsY0FBTUE7QUFETSxPQUFkO0FBR0EsV0FBS1gsS0FBTCxDQUFXZSxpQkFBWCxDQUE2QkgsT0FBN0IsRUFBc0MsVUFBQ1AsSUFBRDtBQUFBLGVBQ2xDLE9BQUtDLFFBQUwsQ0FBYztBQUNaRixvQkFBVUM7QUFERSxTQUFkLENBRGtDO0FBQUEsT0FBdEM7QUFLRDs7OzZCQUVTO0FBQ1IsYUFDRTtBQUFBO0FBQUE7QUFDRSw0QkFBQyxTQUFEO0FBQ0UsdUJBQWEsS0FBS1csV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FEZjtBQUVFLGlCQUFPLEtBQUtkLEtBQUwsQ0FBV0M7QUFGcEIsVUFERjtBQUtFO0FBQUE7QUFBQTtBQUNFLDhCQUFDLFdBQUQ7QUFDRSw0QkFBZ0IsS0FBS2MsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FEbEI7QUFFRSwyQkFBZSxLQUFLRSxhQUFMLENBQW1CRixJQUFuQixDQUF3QixJQUF4QixDQUZqQjtBQUdFLDBCQUFjLEtBQUtHLFlBQUwsQ0FBa0JILElBQWxCLENBQXVCLElBQXZCO0FBSGhCO0FBREY7QUFMRixPQURGO0FBZ0JEOzs7O0VBM0VlSSxNQUFNQyxTOztBQTZFeEJDLE9BQU94QixHQUFQLEdBQWFBLEdBQWI7QUFDTTtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKVxyXG4gICAgY29uc29sZS5sb2cocHJvcHMpXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAvLyBjdXJyTGlzdDogd2luZG93Lmdsb2JhbExpc3QsXHJcbiAgICAgIGN1cnJMaXN0OiBbXHJcbiAgICAgICAgJ2NhcicsXHJcbiAgICAgICAgJ2NhdCcsXHJcbiAgICAgICAgJ2NhbSdcclxuICAgICAgXSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZUN1cnJMaXN0KGxpc3QpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2N1cnJMaXN0OiBsaXN0fSk7XHJcbiAgfVxyXG5cclxuICBjbGlja0N1cnJMaXN0KCkge1xyXG4gICAgLy9hcHBlbmQgdGhpcyBuZXcgbGlzdCB0byB0aGUgRE9NXHJcbiAgICB2YXIgJGxpID0gJCgnPGxpPicrdGhpcy5zdGF0ZS5jdXJyTGlzdCsnPC9saT4nKTtcclxuICAgICQoJyNkb0xpc3QnKS5hcHBlbmQoJGxpKTtcclxuICAgICQoJy5zdWJtaXRMaXN0JykudmFsKCcnKTtcclxuICB9XHJcblxyXG4gIGdldFRvRG9MaXN0KHRvRG8pIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0b0RvXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLmdldEluZm9ybWF0aW9uKG9wdGlvbnMsIChsaXN0KSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3Vyckxpc3Q6IGxpc3QsXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgcG9zdFRvRG9MaXN0KHRvRG8pIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0b0RvXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnBvc3RJbmZvcm1hdGlvbihvcHRpb25zLCAobGlzdCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJMaXN0OiBsaXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvRG9MaXN0KHRvRG8pIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0b0RvXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUluZm9ybWF0aW9uKG9wdGlvbnMsIChsaXN0KSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3Vyckxpc3Q6IGxpc3QsXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRvRG9MaXN0c1xyXG4gICAgICAgICAgZ2V0VG9Eb0xpc3Q9e3RoaXMuZ2V0VG9Eb0xpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGxpc3RzPXt0aGlzLnN0YXRlLmN1cnJMaXN0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxUb0RvVGV4dEJveFxyXG4gICAgICAgICAgICBjaGFuZ2VDdXJyTGlzdD17dGhpcy5jaGFuZ2VDdXJyTGlzdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICBjbGlja0N1cnJMaXN0PXt0aGlzLmNsaWNrQ3Vyckxpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgcG9zdFRvRG9MaXN0PXt0aGlzLnBvc3RUb0RvTGlzdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG4gIH1cclxufVxyXG53aW5kb3cuQXBwID0gQXBwO1xyXG4gICAgICAvLyA8L2Rpdj5cclxuICAgICAgICAvLyA8ZGl2PlxyXG4gICAgICAgIC8vICAgSSBhbSBoZXJlXHJcbiAgICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIDxUb0RvTGlzdCAvPlxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4vLyA8ZGl2PlxyXG4vLyAgIDxOYXYgaGFuZGxlU2VhcmNoSW5wdXRDaGFuZ2U9e3RoaXMuZ2V0WW91dHViZVZpZGVvcy5iaW5kKHRoaXMpfVxyXG4vLyAgIC8+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtN1wiPlxyXG4vLyAgICAgPFZpZGVvUGxheWVyXHJcbi8vICAgICAgIHZpZGVvPXt0aGlzLnN0YXRlLmN1clZpZGVvfVxyXG4vLyAgICAgICByZW5kZXJGeG49e3RoaXMuY2FsbFJlbmRlci5iaW5kKHRoaXMpfVxyXG4vLyAgICAgLz5cclxuLy8gICA8L2Rpdj5cclxuLy8gICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XHJcbi8vICAgICA8VmlkZW9MaXN0XHJcbi8vICAgICAgIHZpZGVvcz17dGhpcy5zdGF0ZS52aWRlb3N9XHJcbi8vICAgICAgIHJlbmRlckZ4bj17dGhpcy5jYWxsUmVuZGVyLmJpbmQodGhpcyl9XHJcbi8vICAgICAvPlxyXG4vLyAgIDwvZGl2PlxyXG4vLyA8L2Rpdj4iXX0=