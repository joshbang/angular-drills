angular.module('app4')
.service('mainService', function($http) {
  var baseUrl = 'http://swapi.co/api/people';

  this.getPeople = function() {
    return $http.get(baseUrl).then(function(response) {
      console.log(response.data);
      return response.data;
    });

  };
});
