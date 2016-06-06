angular.module('DialogApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache'])

    .controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
        $scope.status = '  ';
        $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

        $scope.showAlert = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            // Modal dialogs should fully cover application
            // to prevent interaction outside of dialog
            $mdDialog.show(
                $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .clickOutsideToClose(true)
                    .title('This is an alert dialog box')
                    .textContent('Click the button to close the dialog.')
                    .ariaLabel('Alert Dialog')
                    .ok('OK!')
                    .targetEvent(ev)
            );
        };

        $scope.showConfirm = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.confirm()
                .title('Which button will you like to press?')
                .textContent('A demo of the confirmation dialog.')
                .ariaLabel('Confirmation Dialog')
                .targetEvent(ev)
                .ok('OK')
                .cancel('Cancel');

            $mdDialog.show(confirm).then(function() {
                $scope.status = 'You clicked on OK.';
            }, function() {
                $scope.status = 'You clicked on Cancel.';
            });
        };

        $scope.showPrompt = function(ev) {
            // Appending dialog to document.body to cover sidenav in docs app
            var confirm = $mdDialog.prompt()
                .title('What is your name?')
                .textContent('This is an demo of a dialog with a prompt.')
                .placeholder('your name')
                .ariaLabel('Your name')
                .targetEvent(ev)
                .ok('Okay!')
                .cancel('I\'d rather not say');

            $mdDialog.show(confirm).then(function(result) {
                $scope.status = 'Glad to meet you : ' + result + '!';
            }, function() {
                $scope.status = 'So, you would rather remain anonymous?';
            });
        };

        $scope.showAdvanced = function(ev) {
            var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;

            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'dialog1.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true,
                fullscreen: useFullScreen
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });

            $scope.$watch(function() {
                return $mdMedia('xs') || $mdMedia('sm');
            }, function(wantsFullScreen) {
                $scope.customFullscreen = (wantsFullScreen === true);
            });

        };

        $scope.showTabDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'tabDialog.tmpl.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsideToClose: true
            })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
        };
    });

function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };

    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
}