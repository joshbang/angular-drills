angular.module('app6')
.controller('detailsCtrl', function($scope, starWarsService, $stateParams) {
  // console.log($stateParams);
  starWarsService.getPerson($stateParams.url)
  .then(function(person) {
    $scope.person = person;
  });
});
