'use strict';

var getInformation = function getInformation(_ref, callback) {
  var toDo = _ref.toDo,
      toDoId = _ref.toDoId;

  //check options object ?
  //$.get() to retrieve array of videos
  $.get('http://127.0.0.1:8080/api/posts', {
    toDo: toDo,
    toDoId: toDoId
    // q: query,
    // key: key,
    // maxResults: max,
    // part: 'snippet',
    // type: 'video',
    // videoEmbeddable: 'true'
  }).done(function (_ref2) {
    var items = _ref2.items;

    if (callback) {
      callback(items);
    }
  }).fail(function (_ref3) {
    var responseJSON = _ref3.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.error;
    });
  });
};
//filter out videos which are not embeddable
//callback needs to be called with array of videos returned as result


window.getInformation = getInformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvZ2V0SW5mb3JtYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0SW5mb3JtYXRpb24iLCJjYWxsYmFjayIsInRvRG8iLCJ0b0RvSWQiLCIkIiwiZ2V0IiwiZG9uZSIsIml0ZW1zIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVyciIsImNvbnNvbGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsaUJBQWlCLFNBQWpCQSxjQUFpQixPQUFpQkMsUUFBakIsRUFBOEI7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLE1BQXNCLFFBQXRCQSxNQUFzQjs7QUFDakQ7QUFDQTtBQUNBQyxJQUFFQyxHQUFGLENBQU0saUNBQU4sRUFBeUM7QUFDdkNILFVBQU1BLElBRGlDO0FBRXZDQyxZQUFRQTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJ1QyxHQUF6QyxFQVVDRyxJQVZELENBVU8saUJBQWE7QUFBQSxRQUFYQyxLQUFXLFNBQVhBLEtBQVc7O0FBQ2xCLFFBQUlOLFFBQUosRUFBYztBQUNaQSxlQUFTTSxLQUFUO0FBQ0Q7QUFDRixHQWRELEVBZUNDLElBZkQsQ0FlTSxpQkFBb0I7QUFBQSxRQUFsQkMsWUFBa0IsU0FBbEJBLFlBQWtCOztBQUN4QkEsaUJBQWFDLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxHQUFEO0FBQUEsYUFBU0MsUUFBUUosS0FBakI7QUFBQSxLQUFsQztBQUNELEdBakJEO0FBa0JELENBckJEO0FBc0JFO0FBQ0E7OztBQUdGSyxPQUFPZixjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJnZXRJbmZvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnZXRJbmZvcm1hdGlvbiA9ICh7dG9EbywgdG9Eb0lkfSwgY2FsbGJhY2spID0+IHtcclxuICAvL2NoZWNrIG9wdGlvbnMgb2JqZWN0ID9cclxuICAvLyQuZ2V0KCkgdG8gcmV0cmlldmUgYXJyYXkgb2YgdmlkZW9zXHJcbiAgJC5nZXQoJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9hcGkvcG9zdHMnLCB7XHJcbiAgICB0b0RvOiB0b0RvLFxyXG4gICAgdG9Eb0lkOiB0b0RvSWQsXHJcbiAgICAvLyBxOiBxdWVyeSxcclxuICAgIC8vIGtleToga2V5LFxyXG4gICAgLy8gbWF4UmVzdWx0czogbWF4LFxyXG4gICAgLy8gcGFydDogJ3NuaXBwZXQnLFxyXG4gICAgLy8gdHlwZTogJ3ZpZGVvJyxcclxuICAgIC8vIHZpZGVvRW1iZWRkYWJsZTogJ3RydWUnXHJcbiAgfSlcclxuICAuZG9uZSAoKHtpdGVtc30pID0+IHtcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjayhpdGVtcyk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcclxuICAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKTtcclxuICB9KTtcclxufTtcclxuICAvL2ZpbHRlciBvdXQgdmlkZW9zIHdoaWNoIGFyZSBub3QgZW1iZWRkYWJsZVxyXG4gIC8vY2FsbGJhY2sgbmVlZHMgdG8gYmUgY2FsbGVkIHdpdGggYXJyYXkgb2YgdmlkZW9zIHJldHVybmVkIGFzIHJlc3VsdFxyXG5cclxuXHJcbndpbmRvdy5nZXRJbmZvcm1hdGlvbiA9IGdldEluZm9ybWF0aW9uO1xyXG4iXX0=