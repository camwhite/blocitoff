app = angular.module('blocitoffApp');

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.name = '';
  $scope.description = '';

  $scope.post = function() {
    $http.post('/api/tasks', {name: $scope.name, description: $scope.description}).
    success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(status)
    });
  }

  $scope.get = function() {
    $http.get('/api/tasks').
    success(function(data, status, headers, config) {
      $scope.tasks = [];
      // this callback will be called asynchronously
      // when the response is available
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (moment(data[i].created_at) > moment().subtract(7, 'days')) {
          $scope.tasks.push(data[i]);
        }
      }
    }).
    error(function(data, status, headers, config) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(status)
    });
  }

  $scope.delete = function() {
    var task = $scope.tasks[0];
    var id = task._id;

    $http.delete('/api/tasks/' + id).
    success(function(data, status, headers, config) {
      console.log('deleted');
    }).
    error(function(data, status, headers, config) {
      console.log(status);
    })
  }

}]);