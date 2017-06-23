class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // currList: window.globalList,
      currList: [
        // 'car',
        // 'cat',
        // 'cam'
      ],
      searchValue: ''
    }
  }

  getAll() {
    this.props.getInformation((list) => {
      this.setState({
        currList: list,
      })
    })
  }

  componentDidMount() {
    this.getAll();
  }

  //this is changing to strings
  changeCurrList(list) {
    console.log(list)
    this.setState({searchValue: list});
  }


  postToDoList() {
    var options = {
      toDo: this.state.searchValue
    }
    this.props.postInformation(options, (list) => {
      this.state.currList.push(list)
      var newlist = this.state.currList;
      this.setState({
        currList: newlist,
      })
    })
  }

  deleteToDoList(toDo, toDoId) {
    var options = {
      toDo: toDo,
      toDoId: toDoId
    }
    this.props.deleteInformation(options, (list) => {
      this.getAll();
    })
  }

  render () {
    return (
      <div>
        <ToDoLists
          deleteToDoList={this.deleteToDoList.bind(this)}
          lists={this.state.currList}
        />
        <div>
          <ToDoTextBox
            changeCurrList={this.changeCurrList.bind(this)}
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