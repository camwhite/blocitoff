app = angular.module('blocitoffApp');

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.sample = "Sample";

  // $http.get('/api/things')
  //   .success(function(data) {
  //     $scope.things = data;
  //   })
  //   .error(function() {
  //     alert("Error retrieving data.");
  //   })

  $http.get('/api/tasks')
    .success(function(data) {
      $scope.tasks = data;
    })
    .error(function() {
      alert("Error retrieving data.");
    })

  $scope.createTask = function() {
    $http.post('/api/tasks', $scope.newTask)
      .success(function(data) {
        alert("Creation successful: " + JSON.stringify(data));
        $scope.tasks.push(data);
        $scope.newTask = {};
      })
      .error(function(data) {
        alert("Error: " + JSON.stringify(data));
      })
  }


}]);