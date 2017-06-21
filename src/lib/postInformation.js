var postInformation = ({toDo}, callback) => {
  $.post('http://127.0.0.1:8080/api/posts', {toDo: toDo})
  .done (({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail((err) => {
    console.log(err)
  });
};

window.postInformation = postInformation;
