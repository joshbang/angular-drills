angular.module('app3')
.controller('mainCtrl', function($scope, mainService) {
  $scope.myData = mainService.myDataArray();
});
