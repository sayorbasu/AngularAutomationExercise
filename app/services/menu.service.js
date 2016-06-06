(function(){

    'use strict';

    angular.module('common.services')
        .factory('menu', [
            '$location',
            '$rootScope',
            function ($location) {

                var sections = [{
                    name: 'Getting Started',
                    state: 'home.gettingstarted',
                    type: 'link'
                }];

                sections.push({
                    name: 'Exercise 1',
                    type: 'toggle',
                    pages: [{
                        name: 'Part A',
                        type: 'link',
                        state: 'home.exercise1.partA',
                        icon: 'fa fa-asterisk'
                    }, {
                        name: 'Part B',
                        state: 'home.exercise1.partB',
                        type: 'link',
                        icon: 'fa fa-asterisk'
                    },
                        {
                            name: 'Part C',
                            state: 'home.exercise1.partC',
                            type: 'link',
                            icon: 'fa fa-asterisk'
                        }]
                });

                sections.push({
                    name: 'Exercise 2',
                    type: 'toggle',
                    pages: [{
                        name: 'Part A',
                        type: 'link',
                        state: 'home.exercise2.partA',
                        icon: 'fa fa-asterisk'
                    }, {
                        name: 'Part B',
                        state: 'home.exercise2.partB',
                        type: 'link',
                        icon: 'fa fa-asterisk'
                    },
                        {
                            name: 'Part C',
                            state: 'home.exercise2.partC',
                            type: 'link',
                            icon: 'fa fa-asterisk'
                        }]
                });

                var self;

                return self = {
                    sections: sections,

                    toggleSelectSection: function (section) {
                        self.openedSection = (self.openedSection === section ? null : section);
                    },
                    isSectionSelected: function (section) {
                        return self.openedSection === section;
                    },

                    selectPage: function (section, page) {
                        page && page.url && $location.path(page.url);
                        self.currentSection = section;
                        self.currentPage = page;
                    }
                };

                function sortByHumanName(a, b) {
                    return (a.humanName < b.humanName) ? -1 :
                        (a.humanName > b.humanName) ? 1 : 0;
                }

            }]);

})();