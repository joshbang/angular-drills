angular.module('arrayApp')
.controller('arrayController', function($scope, myService) {

  $scope.myData = myService.dataArray();
  $scope.addNewPerson = function(name, email) {
    arrayService.addNewPerson({
      name: name,
      email: email
    });
  };
});
