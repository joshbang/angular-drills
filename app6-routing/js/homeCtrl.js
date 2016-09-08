angular.module('app6')
.controller('homeCtrl', function($scope, starWarsService) {
  $scope.routeName = 'Home!';
    starWarsService.getPeople()
    .then(function(data) {
      $scope.people = data.results;
      // console.log($scope.people);
    });

});
