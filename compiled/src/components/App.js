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
    value: function getToDoList() {
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
    value: function postToDoList() {
      var _this3 = this;

      var options = {
        toDo: this.state.currList
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
          deleteToDoList: this.deleteToDoList.bind(this),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImN1cnJMaXN0IiwibGlzdCIsInNldFN0YXRlIiwiJGxpIiwiJCIsImFwcGVuZCIsInZhbCIsIm9wdGlvbnMiLCJ0b0RvIiwiZ2V0SW5mb3JtYXRpb24iLCJwb3N0SW5mb3JtYXRpb24iLCJkZWxldGVJbmZvcm1hdGlvbiIsImdldFRvRG9MaXN0IiwiYmluZCIsImRlbGV0ZVRvRG9MaXN0IiwiY2hhbmdlQ3Vyckxpc3QiLCJjbGlja0N1cnJMaXN0IiwicG9zdFRvRG9MaXN0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWDtBQUNBQyxnQkFBVSxDQUNSLEtBRFEsRUFFUixLQUZRLEVBR1IsS0FIUTtBQUZDLEtBQWI7QUFGaUI7QUFVbEI7Ozs7bUNBRWNDLEksRUFBTTtBQUNuQixXQUFLQyxRQUFMLENBQWMsRUFBQ0YsVUFBVUMsSUFBWCxFQUFkO0FBQ0Q7OztvQ0FFZTtBQUNkO0FBQ0EsVUFBSUUsTUFBTUMsRUFBRSxTQUFPLEtBQUtMLEtBQUwsQ0FBV0MsUUFBbEIsR0FBMkIsT0FBN0IsQ0FBVjtBQUNBSSxRQUFFLFNBQUYsRUFBYUMsTUFBYixDQUFvQkYsR0FBcEI7QUFDQUMsUUFBRSxhQUFGLEVBQWlCRSxHQUFqQixDQUFxQixFQUFyQjtBQUNEOzs7a0NBRWE7QUFBQTs7QUFDWixVQUFJQyxVQUFVO0FBQ1pDLGNBQU1BO0FBRE0sT0FBZDtBQUdBLFdBQUtWLEtBQUwsQ0FBV1csY0FBWCxDQUEwQkYsT0FBMUIsRUFBbUMsVUFBQ04sSUFBRDtBQUFBLGVBQy9CLE9BQUtDLFFBQUwsQ0FBYztBQUNaRixvQkFBVUM7QUFERSxTQUFkLENBRCtCO0FBQUEsT0FBbkM7QUFLRDs7O21DQUVjO0FBQUE7O0FBQ2IsVUFBSU0sVUFBVTtBQUNaQyxjQUFNLEtBQUtULEtBQUwsQ0FBV0M7QUFETCxPQUFkO0FBR0EsV0FBS0YsS0FBTCxDQUFXWSxlQUFYLENBQTJCSCxPQUEzQixFQUFvQyxVQUFDTixJQUFEO0FBQUEsZUFDaEMsT0FBS0MsUUFBTCxDQUFjO0FBQ1pGLG9CQUFVQztBQURFLFNBQWQsQ0FEZ0M7QUFBQSxPQUFwQztBQUtEOzs7bUNBRWNPLEksRUFBTTtBQUFBOztBQUNuQixVQUFJRCxVQUFVO0FBQ1pDLGNBQU1BO0FBRE0sT0FBZDtBQUdBLFdBQUtWLEtBQUwsQ0FBV2EsaUJBQVgsQ0FBNkJKLE9BQTdCLEVBQXNDLFVBQUNOLElBQUQ7QUFBQSxlQUNsQyxPQUFLQyxRQUFMLENBQWM7QUFDWkYsb0JBQVVDO0FBREUsU0FBZCxDQURrQztBQUFBLE9BQXRDO0FBS0Q7Ozs2QkFFUztBQUNSLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNEJBQUMsU0FBRDtBQUNFLHVCQUFhLEtBQUtXLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCLElBQXRCLENBRGY7QUFFRSwwQkFBZ0IsS0FBS0MsY0FBTCxDQUFvQkQsSUFBcEIsQ0FBeUIsSUFBekIsQ0FGbEI7QUFHRSxpQkFBTyxLQUFLZCxLQUFMLENBQVdDO0FBSHBCLFVBREY7QUFNRTtBQUFBO0FBQUE7QUFDRSw4QkFBQyxXQUFEO0FBQ0UsNEJBQWdCLEtBQUtlLGNBQUwsQ0FBb0JGLElBQXBCLENBQXlCLElBQXpCLENBRGxCO0FBRUUsMkJBQWUsS0FBS0csYUFBTCxDQUFtQkgsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FGakI7QUFHRSwwQkFBYyxLQUFLSSxZQUFMLENBQWtCSixJQUFsQixDQUF1QixJQUF2QjtBQUhoQjtBQURGO0FBTkYsT0FERjtBQWlCRDs7OztFQTNFZUssTUFBTUMsUzs7QUE2RXhCQyxPQUFPdkIsR0FBUCxHQUFhQSxHQUFiO0FBQ007QUFDRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcylcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIC8vIGN1cnJMaXN0OiB3aW5kb3cuZ2xvYmFsTGlzdCxcclxuICAgICAgY3Vyckxpc3Q6IFtcclxuICAgICAgICAnY2FyJyxcclxuICAgICAgICAnY2F0JyxcclxuICAgICAgICAnY2FtJ1xyXG4gICAgICBdLFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlQ3Vyckxpc3QobGlzdCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7Y3Vyckxpc3Q6IGxpc3R9KTtcclxuICB9XHJcblxyXG4gIGNsaWNrQ3Vyckxpc3QoKSB7XHJcbiAgICAvL2FwcGVuZCB0aGlzIG5ldyBsaXN0IHRvIHRoZSBET01cclxuICAgIHZhciAkbGkgPSAkKCc8bGk+Jyt0aGlzLnN0YXRlLmN1cnJMaXN0Kyc8L2xpPicpO1xyXG4gICAgJCgnI2RvTGlzdCcpLmFwcGVuZCgkbGkpO1xyXG4gICAgJCgnLnN1Ym1pdExpc3QnKS52YWwoJycpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VG9Eb0xpc3QoKSB7XHJcbiAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgdG9EbzogdG9Eb1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcm9wcy5nZXRJbmZvcm1hdGlvbihvcHRpb25zLCAobGlzdCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJMaXN0OiBsaXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIHBvc3RUb0RvTGlzdCgpIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0aGlzLnN0YXRlLmN1cnJMaXN0XHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLnBvc3RJbmZvcm1hdGlvbihvcHRpb25zLCAobGlzdCkgPT5cclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGN1cnJMaXN0OiBsaXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIClcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRvRG9MaXN0KHRvRG8pIHtcclxuICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICB0b0RvOiB0b0RvXHJcbiAgICB9XHJcbiAgICB0aGlzLnByb3BzLmRlbGV0ZUluZm9ybWF0aW9uKG9wdGlvbnMsIChsaXN0KSA9PlxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgY3Vyckxpc3Q6IGxpc3QsXHJcbiAgICAgICAgfSlcclxuICAgICAgKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyICgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFRvRG9MaXN0c1xyXG4gICAgICAgICAgZ2V0VG9Eb0xpc3Q9e3RoaXMuZ2V0VG9Eb0xpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGRlbGV0ZVRvRG9MaXN0PXt0aGlzLmRlbGV0ZVRvRG9MaXN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBsaXN0cz17dGhpcy5zdGF0ZS5jdXJyTGlzdH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8VG9Eb1RleHRCb3hcclxuICAgICAgICAgICAgY2hhbmdlQ3Vyckxpc3Q9e3RoaXMuY2hhbmdlQ3Vyckxpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgY2xpY2tDdXJyTGlzdD17dGhpcy5jbGlja0N1cnJMaXN0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgIHBvc3RUb0RvTGlzdD17dGhpcy5wb3N0VG9Eb0xpc3QuYmluZCh0aGlzKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIClcclxuICB9XHJcbn1cclxud2luZG93LkFwcCA9IEFwcDtcclxuICAgICAgLy8gPC9kaXY+XHJcbiAgICAgICAgLy8gPGRpdj5cclxuICAgICAgICAvLyAgIEkgYW0gaGVyZVxyXG4gICAgICAgIC8vIDwvZGl2PlxyXG4gICAgICAgIC8vIDxkaXY+XHJcbiAgICAgICAgLy8gICA8VG9Eb0xpc3QgLz5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuLy8gPGRpdj5cclxuLy8gICA8TmF2IGhhbmRsZVNlYXJjaElucHV0Q2hhbmdlPXt0aGlzLmdldFlvdXR1YmVWaWRlb3MuYmluZCh0aGlzKX1cclxuLy8gICAvPlxyXG4vLyAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTdcIj5cclxuLy8gICAgIDxWaWRlb1BsYXllclxyXG4vLyAgICAgICB2aWRlbz17dGhpcy5zdGF0ZS5jdXJWaWRlb31cclxuLy8gICAgICAgcmVuZGVyRnhuPXt0aGlzLmNhbGxSZW5kZXIuYmluZCh0aGlzKX1cclxuLy8gICAgIC8+XHJcbi8vICAgPC9kaXY+XHJcbi8vICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxyXG4vLyAgICAgPFZpZGVvTGlzdFxyXG4vLyAgICAgICB2aWRlb3M9e3RoaXMuc3RhdGUudmlkZW9zfVxyXG4vLyAgICAgICByZW5kZXJGeG49e3RoaXMuY2FsbFJlbmRlci5iaW5kKHRoaXMpfVxyXG4vLyAgICAgLz5cclxuLy8gICA8L2Rpdj5cclxuLy8gPC9kaXY+Il19