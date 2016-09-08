angular.module('app6')
.service('starWarsService', function($http) {
  this.getPeople = function() {
    return $http.get("http://swapi.co/api/people/")
    .then(function(response){
      return response.data;
    });
  };
  this.getPerson = function(url) {
    return $http.get(url)
    .then(function(response) {
      return response.data;
    });
  };
});
