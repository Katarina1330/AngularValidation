var app = angular.module('myApp', ['ngMessages']);
app.controller('registrationController', function ($scope) {
    var person = { firstName: '', lastName: '', email: '', password: '' };

    $scope.person = person;

    $scope.submitForm = function(form) {
        console.log($scope.person);
    }
});
