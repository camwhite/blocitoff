app = angular.module('blocitoffApp');

app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.sample = "Sample";

  $http.get('/api/things')
    .success(function(data) {
      $scope.things = data;
    })
    .error(function() {
      alert("Error retrieving data.");
    })

}]);