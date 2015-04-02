'use strict';

angular.module('myApp.recipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes.html',
    controller: 'RecipesCtrl'
  });
}])

.controller('RecipesCtrl', ['$scope', 'Restangular', function($scope, Restangular) {
    Restangular.all('recipes').getList().then(function (data) {
        $scope.recipes = data;
    });
    //$scope.variable = "This is the 'scoped' variable";
    
}])

.service('RecipeService', function() {

    var getAllRecipes = function() {
        Restangular.customGET('recipes/').then(function () {

        })
    }
})
;