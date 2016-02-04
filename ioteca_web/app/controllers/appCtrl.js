
app

.controller("appCtrl", function ($scope, $mdSidenav, $timeout, $rootScope, $window, $document, $log) {

	// config
      $scope.app = {
        name: 'AppName',
        version: '1.0.1',
        
        setting: {
          theme: {
            primary: 'indigo',
            accent: 'purple',
            warn: 'amber'
          },
          asideFolded: false
        },
        search: {
          content: '',
          show: false
        }
      };

      $scope.setTheme = function(theme){
        $scope.app.setting.theme = theme;
      };



	//$rootScope.$on('$stateChangeSuccess', openPage);

    function openPage() {
        $scope.closeAside();
      }

    $scope.goBack = function () {
        $window.history.back();
      };

    $scope.openAside = function () {
        $timeout(function() { $mdSidenav('aside').open(); });
      };
    $scope.closeAside = function () {
        $timeout(function() {  $mdSidenav('aside').close(); });
      };


});