/// <reference path="D:\Projects\AngularJSDemos\AngularDemos\AngularDemos\Scripts/angular.min.js" />

var myApp = angular.module("LikesDislikes", [])
.controller("LikesDislikesC", function ($scope) {
    var technologies = [
        { name: "C#", likes: 0, dislikes: 0 },
        { name: "Python", likes: 0, dislikes: 0 },
        { name: "Java", likes: 0, dislikes: 0 },
        { name: "Angular", likes: 0, dislikes: 0 },
    ];
    $scope.technologies = technologies;

    $scope.incrementLikes = function (technology) {
        technology.likes++;
    }
    $scope.incrementDisLikes = function (technology) {
        technology.dislikes++;
    }
    $scope.Reset = function (technology) {
        technology.dislikes = 0;
        technology.likes = 0;
    }
});
