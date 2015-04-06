angular.module('portfolioFilters', [])
.filter('chess10Filter', function() {
  return function(input) {
    return input.replace("Chess_1.0/", '');
  };
});