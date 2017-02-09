/// <reference path="D:\Projects\AngularJSDemos\AngularDemos\AngularDemos\Scripts/angular.min.js" />


var myApp = angular.module("M3", []);

myApp.controller("C3", function ($scope) {
    var employee = [
        { Firstname: "A", Lastname: "Mujawar", City: "Mumbai" },
        { Firstname: "A", Lastname: "Mujawar", City: "Mumbai" },
        { Firstname: "A", Lastname: "Mujawar", City: "Mumbai" },
        { Firstname: "A", Lastname: "Mujawar", City: "Mumbai" },
    ];

    $scope.employee = employee;
});