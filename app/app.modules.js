(function(){
    'use strict';

    angular.module('common.services', []);
    angular.module('automationApp.controllers', ['common.directives']);
    angular.module('common.directives', ['common.services']);
})();  