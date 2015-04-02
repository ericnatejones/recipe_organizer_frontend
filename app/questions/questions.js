'use strict';

angular.module('myApp.questions', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/questions', {
            templateUrl: 'questions/questions.html',
            controller: 'QuestionsCtrl'
        });
    }])

    .controller('QuestionsCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        console.log("Questions contoller loaded")
        $scope.f = function () {
            $scope.question1 = false;
        }
        $scope.finished = function () {
            console.log($scope.question1Answer);
        }
        //$scope.toggle = function () {
        //    var toggleChecked =  document.getEm
        //}
        Restangular.all('ingredients').getList().then(function (data) {
            $scope.ingredients = data;
        })
        Restangular.all('recipes').getList().then(function (data) {
            $scope.recipes = data;
        })

    }])


    .filter('RecipeFilter', function () {
        return function (checkedIngredients, recipes) {
            // Implementation.
        };
    });