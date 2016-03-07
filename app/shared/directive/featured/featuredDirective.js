'use strict';

app.directive('featuredBanner', [ function() {
    return {
        restrict:'AE',
        scope: {
            type: '@'
        },
        controller: function (Menu, $scope) {
            $scope.title = 'Test';
            $scope.getMenu = Menu.query();
            $scope.getMenu.$promise.then(function(data) {
                $scope.data = {};
                $scope.data.menu = data;
            });
        },
        template:'<div class="featured-section">'+
                        '<div class="ftd-container" ng-repeat="(key, value ) in data.menu" ng-if="$index < 1">'+
                        '<img class="animated rubberBand" ng-if="value.path == menuType " ng-src="{{value.image_path}}/{{value.featured_banner.filename}}" />'+
                    '</div>',
        link: function (scope, elem, attrs) {
                scope.menuType = scope.type;
        }
    }
}]);