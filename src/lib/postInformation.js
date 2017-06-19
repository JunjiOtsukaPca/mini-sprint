var postInformation = ({toDo, toDoId}, callback) => {
  $.post('http://127.0.0.1:8080/api/posts', {
    toDo: toDo,
    toDoId: toDoId,
  })
  .done (({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error);
  });
};

window.postInformation = postInformation;
