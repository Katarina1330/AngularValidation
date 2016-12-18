var app = angular.module('myApp', ['ngMessages']);
app.controller('registrationController', function ($scope) {
    $scope.person = {};

    $scope.submitForm = function(form) {
        console.log($scope.person);
    }
});
