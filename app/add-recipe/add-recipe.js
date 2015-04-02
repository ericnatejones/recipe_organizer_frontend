'use strict';

angular.module('myApp.add-recipe', ['ngRoute'])


    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/add-recipe', {
            templateUrl: 'add-recipe/add-recipe.html',
            controller: 'AddRecipeCtrl'
        });
    }])

    .controller('AddRecipeCtrl', ['$scope', 'Restangular', '$location', function ($scope, Restangular, $location) {
        // Initialize an empty recipe object with an empty ingredients list inside.

        $scope.recipe = {
            ingredients: []
        };


        // Add the ingredients to the recipe object we're building

        $scope.addIngredientToRecipe = function(ingredientName) {
            var ingredient = {name: ingredientName};
            var AddIngredient = true;
            for (var i =0; i < $scope.ingredients.length; i++) {
                if ($scope.ingredients[i].name === ingredient.name) {
                    alert("that ingredient already exists in the database");
                    var AddIngredient = false
                }
            }
            for (var i =0; i < $scope.recipe.ingredients.length; i++) {
                if ($scope.recipe.ingredients[i].name === ingredient.name) {
                    alert("that ingredient already exists in the database");
                    var AddIngredient = false
                }
            }
            if (AddIngredient) {
                Restangular.all('ingredients/').customPOST(ingredient).then(function (ingredient) {
                    $scope.recipe.ingredients.push(ingredient);
                    $scope.ingredientName = '';
                    document.getElementById('addIngredientBox').focus();

                });
            }
        };
        $scope.ingredientClicked = function(ingredientName) {
            var ingredient = {name: ingredientName};
            $scope.searchTerm = '';
            $scope.recipe.ingredients.push(ingredient);
            document.getElementById('ingredientSearch').focus();
            for (var i =0; i < $scope.ingredients.length; i++) {
                if ($scope.ingredients[i].name === ingredientName) {
                    $scope.ingredients.splice(i, 1);
                    break;
                }
            }

        };
        $scope.removeIngredient = function(ingredientName) {
            var ingredient = {name:ingredientName};
            $scope.ingredients.push(ingredient);
            for (var i =0; i < $scope.recipe.ingredients.length; i++) {
                if ($scope.recipe.ingredients[i].name === ingredientName) {
                    $scope.recipe.ingredients.splice(i, 1);
                    break;
                }
            }
            //$scope.recipe.ingredients.splice(ingredient);
            document.getElementById('ingredientSearch').focus()

        };
        Restangular.all('ingredients').getList().then(function (data) {
            $scope.ingredients = data;
        });
        // Add a new recipe, alert the user when it's been created or when there was a problem.
        $scope.addRecipe = function () {
            Restangular.all('add-recipe').customPOST($scope.recipe).then(function () {

                    alert("Recipe added!");
                    $location.path('/list_of_recipes');
                },
                function () {
                    alert("There was a problem creating your recipe. Please try again.")
                })}
    }]);