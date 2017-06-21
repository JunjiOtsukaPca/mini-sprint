var deleteInformation = ({toDo, toDoId}, callback) => {
  $.delete(`http://127.0.0.1:8080/api/posts/${toDoId}`, {
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

window.deleteInformation = deleteInformation;

//how to use back ticks in ajax
// .get(`/api/chefs/${id}`);