angular.module('app1')
.controller('mainCtrl', function($scope) {
  $scope.test = "";
  $scope.changeName = function(name) {
    $scope.name = name;
    $scope.newName = ''
  };
});
