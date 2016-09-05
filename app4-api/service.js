angular.module('apiApp').service('service', function($http) {
  var baseUrl = 'http://swapi.co/api/starships';

  this.getStarships = function() {
    var promise = $http({
      method: 'GET',
      url: baseUrl
    }).then(function(response){
      if(response.status === 200){
        return response.data;
      } else {
        return "Error getting data";
      }
    });
    return promise;
  };
});
