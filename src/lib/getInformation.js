var getInformation = ({toDo}, callback) => {
  $.get('http://127.0.0.1:8080/api/posts', {toDo: toDo})
  .done (({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error);
  });
};

window.getInformation = getInformation;
