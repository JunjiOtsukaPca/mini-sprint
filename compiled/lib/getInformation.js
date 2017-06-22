'use strict';

var getInformation = function getInformation(callback) {
  $.get('http://127.0.0.1:8080/api/posts').done(function (items) {
    console.log(items);
    if (callback) {
      callback(items);
    }
  }).fail(function (_ref) {
    var responseJSON = _ref.responseJSON;

    responseJSON.error.errors.forEach(function (err) {
      return console.error;
    });
  });
};

window.getInformation = getInformation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvZ2V0SW5mb3JtYXRpb24uanMiXSwibmFtZXMiOlsiZ2V0SW5mb3JtYXRpb24iLCJjYWxsYmFjayIsIiQiLCJnZXQiLCJkb25lIiwiaXRlbXMiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsInJlc3BvbnNlSlNPTiIsImVycm9yIiwiZXJyb3JzIiwiZm9yRWFjaCIsImVyciIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxpQkFBaUIsU0FBakJBLGNBQWlCLENBQUNDLFFBQUQsRUFBYztBQUNqQ0MsSUFBRUMsR0FBRixDQUFNLGlDQUFOLEVBQ0NDLElBREQsQ0FDTyxVQUFDQyxLQUFELEVBQVc7QUFDaEJDLFlBQVFDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLFFBQUlKLFFBQUosRUFBYztBQUNaQSxlQUFTSSxLQUFUO0FBQ0Q7QUFDRixHQU5ELEVBT0NHLElBUEQsQ0FPTSxnQkFBb0I7QUFBQSxRQUFsQkMsWUFBa0IsUUFBbEJBLFlBQWtCOztBQUN4QkEsaUJBQWFDLEtBQWIsQ0FBbUJDLE1BQW5CLENBQTBCQyxPQUExQixDQUFrQyxVQUFDQyxHQUFEO0FBQUEsYUFBU1AsUUFBUUksS0FBakI7QUFBQSxLQUFsQztBQUNELEdBVEQ7QUFVRCxDQVhEOztBQWFBSSxPQUFPZCxjQUFQLEdBQXdCQSxjQUF4QiIsImZpbGUiOiJnZXRJbmZvcm1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBnZXRJbmZvcm1hdGlvbiA9IChjYWxsYmFjaykgPT4ge1xyXG4gICQuZ2V0KCdodHRwOi8vMTI3LjAuMC4xOjgwODAvYXBpL3Bvc3RzJylcclxuICAuZG9uZSAoKGl0ZW1zKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhpdGVtcylcclxuICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICBjYWxsYmFjayhpdGVtcyk7XHJcbiAgICB9XHJcbiAgfSlcclxuICAuZmFpbCgoe3Jlc3BvbnNlSlNPTn0pID0+IHtcclxuICAgIHJlc3BvbnNlSlNPTi5lcnJvci5lcnJvcnMuZm9yRWFjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKTtcclxuICB9KTtcclxufTtcclxuXHJcbndpbmRvdy5nZXRJbmZvcm1hdGlvbiA9IGdldEluZm9ybWF0aW9uO1xyXG4iXX0=