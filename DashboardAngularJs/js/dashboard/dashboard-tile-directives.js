(function() {
	angular.module('dashboard-tile-directives', [])
		.directive("newMetric", function() {
			return {
				restrict: "E",
				templateUrl: "../directives/new-metric.html"
			};
		})
		.directive("editMetric", function() {
			return {
				restrict: "E",
				templateUrl: "../directives/edit-metric.html"
			};
		})
		.directive("viewMetric", function() {
			return {
				restrict: "E",
				templateUrl: "../directives/view-metric.html"
			};
		})
		.directive("loadingMetric", function() {
			return {
				restrict: "E",
				templateUrl: "../directives/loading-metric.html"
				//controller: function () {
				//},
				//controllerAs: "viewMetric"
			};
		})
		.directive('chart', function() {
			return {
				restrict: 'E',
				template: '<div></div>',
				scope: {
					chartData: "=value",
				},
				transclude: true,
				replace: true,
				link: function ($scope, $element, $attrs) {
					$scope.$watch('chartData', function(value) {
						if (!value) {
							return;
						}

						$scope.chartData.chart.renderTo = $element[0];

						new Highcharts.Chart($scope.chartData);
					});
				}
			};
		})

		//todo: move to global directives
		.directive('res', function () {
			var result = {
				restrict:"EAC",
				updateText:function(el, key, html){
					if (key) {
						var val = Localization[key];
						el[html ? 'html' : 'text'](val);
					}
				},

				link:function (scope, elm, attrs) {
					attrs.$observe('res', function () {
						result.updateText(elm, attrs.res);
					});
				}
			};

			return result;
		});
})();