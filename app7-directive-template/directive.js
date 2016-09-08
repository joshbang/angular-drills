angular.module('app7')
.directive('coolDirective', function() {

  function getColor() {
    var colors = ['red', 'green', 'blue', 'purple', 'yellow', 'orange', 'black', 'pink', 'grey', 'white', 'darkgrey'];
    var index = Math.floor(Math.random() * colors.length);
    return colors[index];
  }



  return {
    restrict: 'AE',
    scope: {
    },
    link: function(scope, element, attributes) {
      element.on('click', function(event) {
        var newColor = getColor();
        var targetElement = element.find('section');
        targetElement.css('background-color', newColor);
      });
    },
    templateUrl: 'coolDirective.html',
    controller: function($scope) {
      $scope.test = 'CLICKED!';

    }
  };
});
