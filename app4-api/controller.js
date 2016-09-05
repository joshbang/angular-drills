angular.module('apiApp').controller('controller', function($scope, service) {
  $scope.getStarships = function() {
    var cPromise = service.getStarships();

    cPromise.then(function(starships){
      $scope.starships = starships;
    });
  };
  $scope.getStarships();
});
