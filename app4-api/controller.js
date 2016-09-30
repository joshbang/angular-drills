angular.module('app4')
.controller('mainCtrl', function($scope, mainService) {

  mainService.getPeople().then(function(response) {
    $scope.people = response.results;
  });
});
