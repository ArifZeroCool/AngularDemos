
var myApp = angular.module("M2", []);

myApp.controller("C2", function ($scope) {
    var country = {
        name: "USA",
        flag: "/Content/AustraliaFlag.png"
    }
    $scope.country = country;
});