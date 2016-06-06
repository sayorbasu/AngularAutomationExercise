angular.module('InputErrApp',['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

    .controller('InputErrCtrl', function($scope) {
        $scope.project = {
            description: 'Nuclear Missile Defense System',
            rate: 500
        };
    });
