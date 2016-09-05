angular.module('app3').controller('controller', function($scope, service) {

$scope.getData = service.getData;
});
