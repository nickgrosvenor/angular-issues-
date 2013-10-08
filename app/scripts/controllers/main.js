'use strict';

angular.module('angularIssuesApp')
  .controller('MainCtrl', function ($scope, $http) {

$http.get('https://api.github.com/repos/nickgrosvenor/ticTacToe/issues').success(function(response) {

$scope.myIssues = response.issues 

});



});

  });
