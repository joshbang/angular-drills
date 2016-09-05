angular.module('arrayApp').controller('arrayController', function($scope, service) {
  $scope.getData = service.getData;
});
