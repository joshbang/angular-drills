angular.module('apiApp').controller('controller', function($scope, service) {
  $scope.test = service.test;

  $scope.getStarships = function(){
    var cPromise = service.swApi();

    cPromise.then(function(starships){
      $scope.starships = starships;
    });
  };
  $scope.getStarships();
});
