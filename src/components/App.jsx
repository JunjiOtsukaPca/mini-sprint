class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // currList: window.globalList,
      currList: [
        'car',
        'cat',
        'cam'
      ],
    }
  }

  changeCurrList(list) {
    this.setState({currList: list});
  }

  clickCurrList() {
    //append this new list to the DOM
    var $li = $('<li>'+this.state.currList+'</li>');
    $('#doList').append($li);
    $('.submitList').val('');
  }

  getToDoList() {
    var options = {
      toDo: toDo
    }
    this.props.getInformation(options, (list) =>
        this.setState({
          currList: list,
        })
      )
  }

  postToDoList() {
    var options = {
      toDo: this.state.currList
    }
    this.props.postInformation(options, (list) =>
        this.setState({
          currList: list,
        })
      )
  }

  deleteToDoList(toDo) {
    var options = {
      toDo: toDo
    }
    this.props.deleteInformation(options, (list) =>
        this.setState({
          currList: list,
        })
      )
  }

  render () {
    return (
      <div>
        <ToDoLists
          getToDoList={this.getToDoList.bind(this)}
          deleteToDoList={this.deleteToDoList.bind(this)}
          lists={this.state.currList}
        />
        <div>
          <ToDoTextBox
            changeCurrList={this.changeCurrList.bind(this)}
            clickCurrList={this.clickCurrList.bind(this)}
            postToDoList={this.postToDoList.bind(this)}
          />
        </div>
      </div>

    )
  }
}
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