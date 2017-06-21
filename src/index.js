ReactDOM.render(<App
    getInformation={window.getInformation}
    postInformation={window.postInformation}
    deleteInformation={window.deleteInformation}
  />, document.getElementById('app'));