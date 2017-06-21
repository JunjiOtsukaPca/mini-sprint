'use strict';

var deleteInformation = function deleteInformation(_ref, callback) {
  var toDo = _ref.toDo,
      toDoId = _ref.toDoId;

  $.delete('http://127.0.0.1:8080/api/posts/' + toDoId, {
    toDo: toDo,
    toDoId: toDoId
  }).done(function (_ref2) {
    var items = _ref2.items;

    if (callback) {
      callback(items);
    }
  }).fail(function (err) {
    console.log('error', err);
  });
};

window.deleteInformation = deleteInformation;

//how to use back ticks in ajax
// .get(`/api/chefs/${id}`);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZGVsZXRlSW5mb3JtYXRpb24uanMiXSwibmFtZXMiOlsiZGVsZXRlSW5mb3JtYXRpb24iLCJjYWxsYmFjayIsInRvRG8iLCJ0b0RvSWQiLCIkIiwiZGVsZXRlIiwiZG9uZSIsIml0ZW1zIiwiZmFpbCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsb0JBQW9CLFNBQXBCQSxpQkFBb0IsT0FBaUJDLFFBQWpCLEVBQThCO0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxNQUFzQixRQUF0QkEsTUFBc0I7O0FBQ3BEQyxJQUFFQyxNQUFGLHNDQUE0Q0YsTUFBNUMsRUFBc0Q7QUFDcERELFVBQU1BLElBRDhDO0FBRXBEQyxZQUFRQTtBQUY0QyxHQUF0RCxFQUlDRyxJQUpELENBSU8saUJBQWE7QUFBQSxRQUFYQyxLQUFXLFNBQVhBLEtBQVc7O0FBQ2xCLFFBQUlOLFFBQUosRUFBYztBQUNaQSxlQUFTTSxLQUFUO0FBQ0Q7QUFDRixHQVJELEVBU0NDLElBVEQsQ0FTTSxVQUFDQyxHQUFELEVBQVM7QUFDYkMsWUFBUUMsR0FBUixDQUFZLE9BQVosRUFBcUJGLEdBQXJCO0FBQ0QsR0FYRDtBQVlELENBYkQ7O0FBZUFHLE9BQU9aLGlCQUFQLEdBQTJCQSxpQkFBM0I7O0FBRUE7QUFDQSIsImZpbGUiOiJkZWxldGVJbmZvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkZWxldGVJbmZvcm1hdGlvbiA9ICh7dG9EbywgdG9Eb0lkfSwgY2FsbGJhY2spID0+IHtcclxuICAkLmRlbGV0ZShgaHR0cDovLzEyNy4wLjAuMTo4MDgwL2FwaS9wb3N0cy8ke3RvRG9JZH1gLCB7XHJcbiAgICB0b0RvOiB0b0RvLFxyXG4gICAgdG9Eb0lkOiB0b0RvSWQsXHJcbiAgfSlcclxuICAuZG9uZSAoKHtpdGVtc30pID0+IHtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjayhpdGVtcyk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZmFpbCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZXJyb3InLCBlcnIpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxud2luZG93LmRlbGV0ZUluZm9ybWF0aW9uID0gZGVsZXRlSW5mb3JtYXRpb247XHJcblxyXG4vL2hvdyB0byB1c2UgYmFjayB0aWNrcyBpbiBhamF4XHJcbi8vIC5nZXQoYC9hcGkvY2hlZnMvJHtpZH1gKTsiXX0=