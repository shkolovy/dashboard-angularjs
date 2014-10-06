(function() {
	angular.module('dashboard-controller', [])
		.factory('dashboardFactory', function($http) {
			return {
				get: function() {
					return $http.get('Home/GetDashboards')
						.then(function(result) {
							return result.data;
						});
				},
				save: function(dashboardName) {
				},
				remove: function(id) {
				}
			}
		})

	.controller('dashboardController', ['$scope', '$filter', 'dashboardFactory', function ($scope, $filter, dashboardFactory) {
		$scope.dashboards = [];
		$scope.tiles = [];
		$scope.selectedDashboardId = null;

		$scope.load = function () {
			dashboardFactory.get().then(function (data) {
				$scope.dashboards = data;
				$scope.selectedDashboardId = $scope.dashboards[0].Id;
				$scope.showTiles($scope.dashboards[0].Id);
			});
		};

		$scope.showTiles = function (dashboardId) {
			var dashboard = $filter('filter')($scope.dashboards, { Id: dashboardId })[0];
			$scope.tiles = dashboard.Metrics;
		};

		$scope.createTile = function () {
			$scope.$broadcast('onCreateTileClick');
		}
	}]);
})();