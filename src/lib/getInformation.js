var getInformation = (callback) => {
  $.get('http://127.0.0.1:8080/api/posts')
  .done ((items) => {
    console.log(items)
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => console.error);
  });
};

window.getInformation = getInformation;
