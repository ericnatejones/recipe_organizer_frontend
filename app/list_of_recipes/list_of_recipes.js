'use strict';

angular.module('myApp.list_of_recipes', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/list_of_recipes', {
            templateUrl: 'list_of_recipes/list_of_recipes.html',
            controller: 'ListOfRecipesCtrl'
        });
    }])

    .controller('ListOfRecipesCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
        Restangular.all('recipes').getList().then(function (data) {
            $scope.recipes = data;
        })

        console.log("Loaded list_of_recipes.")

    }]);