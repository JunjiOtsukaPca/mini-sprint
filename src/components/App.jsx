class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      // currList: window.globalList,
      currList: '',
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

  getToDoList(toDo) {
    var options = {
      toDo: toDo
    }
    this.props.getInformation(options, (list) =>
        this.setState({
          currList: list,
        })
      )
  }

  render () {
    return (
      <div>
        <ToDoLists
          getToDoList={this.getToDoList.bing(this)}
          lists={this.state.currList}
        />
        <div>
          <ToDoTextBox
            changeCurrList={this.changeCurrList.bind(this)}
            clickCurrList={this.clickCurrList.bind(this)}
          />
        </div>
      </div>

    )
  }
}
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