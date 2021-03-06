'use strict';

var deleteInformation = function deleteInformation(_ref, callback) {
  var toDo = _ref.toDo,
      toDoId = _ref.toDoId;

  $.ajax({
    url: 'http://127.0.0.1:8080/api/posts/' + toDoId,
    type: 'DELETE',
    data: {
      toDo: toDo
    },
    success: function success(data) {
      if (callback) {
        callback(data);
      }
    },
    failure: function failure(err) {
      console.log(err);
    }
  }

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
  );
};

window.deleteInformation = deleteInformation;

//how to use back ticks in ajax
// .get(`/api/chefs/${id}`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZGVsZXRlSW5mb3JtYXRpb24uanMiXSwibmFtZXMiOlsiZGVsZXRlSW5mb3JtYXRpb24iLCJjYWxsYmFjayIsInRvRG8iLCJ0b0RvSWQiLCIkIiwiYWpheCIsInVybCIsInR5cGUiLCJkYXRhIiwic3VjY2VzcyIsImZhaWx1cmUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLG9CQUFvQixTQUFwQkEsaUJBQW9CLE9BQWlCQyxRQUFqQixFQUE4QjtBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7QUFBQSxNQUF0QkMsTUFBc0IsUUFBdEJBLE1BQXNCOztBQUNwREMsSUFBRUMsSUFBRixDQUFPO0FBQ0xDLDhDQUF3Q0gsTUFEbkM7QUFFTEksVUFBTSxRQUZEO0FBR0xDLFVBQU07QUFDSk4sWUFBTUE7QUFERixLQUhEO0FBTUxPLGFBQVMsaUJBQVNELElBQVQsRUFBZTtBQUN0QixVQUFJUCxRQUFKLEVBQWM7QUFDWkEsaUJBQVNPLElBQVQ7QUFDRDtBQUNGLEtBVkk7QUFXTEUsYUFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCQyxjQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQWJJOztBQWdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzQkE7QUE0QkQsQ0E3QkQ7O0FBK0JBRyxPQUFPZCxpQkFBUCxHQUEyQkEsaUJBQTNCOztBQUVBO0FBQ0EiLCJmaWxlIjoiZGVsZXRlSW5mb3JtYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVsZXRlSW5mb3JtYXRpb24gPSAoe3RvRG8sIHRvRG9JZH0sIGNhbGxiYWNrKSA9PiB7XHJcbiAgJC5hamF4KHtcclxuICAgIHVybDogYGh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9hcGkvcG9zdHMvJHt0b0RvSWR9YCxcclxuICAgIHR5cGU6ICdERUxFVEUnLFxyXG4gICAgZGF0YToge1xyXG4gICAgICB0b0RvOiB0b0RvLFxyXG4gICAgfSxcclxuICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmYWlsdXJlOiBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9KVxyXG5cclxuICAvLyAkLmRlbGV0ZShgaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FwaS9wb3N0cy8ke3RvRG9JZH1gLCB7XHJcbiAgLy8gICB0b0RvOiB0b0RvLFxyXG4gIC8vICAgdG9Eb0lkOiB0b0RvSWQsXHJcbiAgLy8gfSlcclxuICAvLyAuZG9uZSAoKHtpdGVtc30pID0+IHtcclxuICAvLyAgIGlmIChjYWxsYmFjaykge1xyXG4gIC8vICAgICBjYWxsYmFjayhpdGVtcyk7XHJcbiAgLy8gICB9XHJcbiAgLy8gfSlcclxuICAvLyAuZmFpbCgoZXJyKSA9PiB7XHJcbiAgLy8gICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xyXG4gIC8vIH0pO1xyXG59O1xyXG5cclxud2luZG93LmRlbGV0ZUluZm9ybWF0aW9uID0gZGVsZXRlSW5mb3JtYXRpb247XHJcblxyXG4vL2hvdyB0byB1c2UgYmFjayB0aWNrcyBpbiBhamF4XHJcbi8vIC5nZXQoYC9hcGkvY2hlZnMvJHtpZH1gKTsiXX0=