angular.module('app4').controller('controller', function($scope, service) {
  $scope.test = service.test;

  $scope.getStarships = function() {
    var cPromise = service.getStarships();

    cPromise.then(function(starships){
      $scope.starships = starships;
    });
  };
  $scope.getStarships();
});
