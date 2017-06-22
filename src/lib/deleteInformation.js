var deleteInformation = ({toDo, toDoId}, callback) => {
  $.ajax({
    url: `http://127.0.0.1:8080/api/posts/${toDoId}`,
    type: 'DELETE',
    data: {
      toDo: toDo,
    },
    success: function(data) {
      if (callback) {
        callback(data);
      }
    },
    failure: function(err) {
      console.log(err);
    }
  })

  // $.delete(`http://127.0.0.1:8080/api/posts/${toDoId}`, {
  //   toDo: toDo,
  //   toDoId: toDoId,
  // })
  // .done (({items}) => {
  //   if (callback) {
  //     callback(items);
  //   }
  // })
  // .fail((err) => {
  //   console.log('error', err);
  // });
};

window.deleteInformation = deleteInformation;

//how to use back ticks in ajax
// .get(`/api/chefs/${id}`);