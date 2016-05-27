var mainApp = angular.module('MainApp', ['directive-linkedin']);

mainApp.controller('ApplicationController', function ($scope) {
    $scope.linkedInCallBack = function(data){
        console.log(data);
    }; 
});

