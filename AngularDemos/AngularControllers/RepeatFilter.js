/// <reference path="D:\Projects\AngularJSDemos\AngularDemos\AngularDemos\Scripts/angular.min.js" />


var myApp = angular.module("RFilter", [])
.controller("FilterC", function ($scope) {
    var employees = [
        { name: "cdfdfdf", DOB: new Date("November 23,1995"), gender: "Male", salary: 55000.235 },
        { name: "adfdf", DOB: new Date("November 23,1995"), gender: "Female", salary: 55000.456 },
        { name: "rdfdf", DOB: new Date("November 23,1995"), gender: "Male", salary: 55000.278 },
        { name: "bfgfg", DOB: new Date("November 23,1995"), gender: "Female", salary: 55000.256 },
        { name: "hfgfgg", DOB: new Date("November 23,1995"), gender: "Male", salary: 55000.235 },
    ];
    $scope.employees = employees;
    $scope.RowLimit = 3;
    $scope.sortColumn = name;
});