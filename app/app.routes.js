(function () {

    'use strict';

// Declare app level module which depends on filters, and services

    angular.module('automationApp', [
        'automationApp.controllers',
        'ngAnimate',
        'ui.router',
        'ngMaterial',
        'ngAria',
        'ngMessages',
        'material.svgAssetsCache',
        'DialogApp',
        'InputErrApp',
        'AutoCompleteApp',
        'OptionGroupApp',
        'DeferredLoadingApp',
    ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('light-blue', {
                    'default': '300'
                })
                .accentPalette('deep-orange', {
                    'default': '500'
                });
        })
        .config(['$stateProvider', '$urlRouterProvider', '$logProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider.otherwise("/");

                $stateProvider
                    .state('home', {
                        url: '/',

                        views: {

                            '@': {
                                templateUrl: 'views/home.view.html',
                                controller: 'HomeCtrl as vm'
                            }
                        }
                    })
                    .state('home.gettingstarted', {
                        url: 'gettingstarted',

                        views: {

                            'content@home': {
                                templateUrl: 'views/gettingstarted.view.html'
                            }
                        }
                    })
                    .state('home.exercise1', {
                        url: 'exercise1',
                        abstract: true
                    })
                    .state('home.exercise1.partA', {
                        url: '/partA',

                        views: {

                            'content@home': {
                                templateUrl: 'views/exercise1.partA.view.html'
                            }
                        }
                    })
                    .state('home.exercise1.partB', {
                        url: '/partB',

                        views: {

                            'content@home': {
                                templateUrl: 'views/exercise1.partB.view.html'
                            }
                        }
                    })
                    .state('home.exercise1.partC', {
                        url: '/partC',

                        views: {

                            'content@home': {
                                templateUrl: 'views/exercise1.partC.view.html'
                            }
                        }
                    })
                    .state('home.exercise2', {
                        url: 'exercise2',
                        abstract: true
                    })
                    .state('home.exercise2.partA', {
                        url: '/partA',

                        views: {

                            'content@home': {
                                templateUrl: 'views/exercise2.partA.view.html'
                            }
                        }
                    })
                    .state('home.exercise2.partB', {
                        url: '/partB',

                        views: {

                            'content@home': {
                                templateUrl: 'views/exercise2.partB.view.html'
                            }
                        }
                    })
                    .state('home.exercise2.partC', {
                        url: '/partC',

                        views: {

                            'content@home': {
                                templateUrl: 'views/exercise2.partC.view.html'
                            }
                        }
                    })
            }])
        //take all whitespace out of string
        .filter('nospace', function () {
            return function (value) {
                return (!value) ? '' : value.replace(/ /g, '');
            };
        })
        //replace uppercase to regular case
        .filter('humanizeDoc', function () {
            return function (doc) {
                if (!doc) return;
                if (doc.type === 'directive') {
                    return doc.name.replace(/([A-Z])/g, function ($1) {
                        return '-' + $1.toLowerCase();
                    });
                }

                return doc.label || doc.name;
            };
        });

})();