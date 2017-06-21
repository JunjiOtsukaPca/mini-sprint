var postInformation = ({toDo}, callback) => {
  $.post('http://127.0.0.1:8080/api/posts', {toDo: toDo}, ((data) => {
    if (callback) {
      callback(data);
    }
  })
  .fail((err) => {
    console.log(err)
  });
};

window.postInformation = postInformation;
