var app = angular.module('myApp', []);
app.controller('registrationController', function ($scope) {
    var person = { firstName: '', lastName: '', email: '', password: '' };

    $scope.person = person;

    $scope.submitForm = function() {
        console.log($scope.person);
    }
});
