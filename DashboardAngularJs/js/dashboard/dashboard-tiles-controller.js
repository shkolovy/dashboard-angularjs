(function() {
	angular.module('dashboard-tiles-controller', [])
		.factory('matricFactory', function($http) {
			return {
				get: function(id) {
					return $http.get('Home/GetMetric', { params: { id: id } })
						.then(function(result) {
							return result.data;
						});
				},
				getMetricSettings: function(id) {
					return $http.get('Home/GetMetricSettings', { params: { id: id } })
						.then(function(result) {
							return result.data;
						});
				},
				getMetricSpecificSettings: function(id) {
					return $http.get('Home/getMetricSpecificSettings', { params: { metricType: id } })
						.then(function(result) {
							return result.data;
						});
				},
				save: function(metric) {
					return $http.post('Home/SaveMetric', { metric: metric })
						.then(function(result) {
							return result.data;
						});
				},
				remove: function(id) {
					$http.post('Home/RemoveMetric', { id: id });
				}
			}
		})
		.controller('tileController', [
			'$scope', '$filter', 'matricFactory', function($scope, $filter, matricFactory) {
				$scope.isLoading = true;
				$scope.isEdit = false;

				$scope.getNewMetric = function() {
					return {
						Id: 0
					};
				};

				$scope.metric = $scope.getNewMetric();

				$scope.load = function(id) {
					matricFactory.get(id).then(function(data) {
						$scope.metric = data;

						var s = [
							{
								"name": "Allowed",
								"data": [
									{
										"y": 0.116,
										"color": "#9ad02b"
									},
									{ "y": 0.223, "color": "#9ad02b" },
									{ "y": 61.750002, "color": "#9ad02b" },
									{ "y": 102.997004, "color": "#9ad02b" },
									{ "y": 136.278999, "color": "#9ad02b" },
									{ "y": 159.336002, "color": "#9ad02b" },
									{ "y": 188.323006, "color": "#9ad02b" },
									{ "y": 199.292, "color": "#9ad02b" },
									{ "y": 224.129997, "color": "#9ad02b" },
									{ "y": 245.834, "color": "#9ad02b" }
								],
								"minPointLength": 3
							},
							{
								"name": "Values",
								"data": [
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 },
									{ "y": 0 }
								],
								"xAxis": 1
							}
						];

						var a = ["FNF", "FTF", "DX54", "N2 ", "FNE", "CZM", "FND", "MGX", "HKX", "FTV"];
						var b = ["0 miles", "0 miles", "38 miles", "64 miles", "85 miles", "99 miles", "117 miles", "124 miles", "139 miles", "153 miles"];
						var m = 245.834;

						$scope.chart = new DashboardRankingChart(s, m, a, b, function() {});
						$scope.isLoading = false;
					});
				};

				$scope.isNew = function() {
					return $scope.metric.Id === 0;
				}

				$scope.remove = function(index) {
					$scope.isEdit = false;
					$scope.$parent.tiles.splice(index, 1);
					matricFactory.remove($scope.metric.Id);
				};

				$scope.new = function() {
					$scope.isEdit = true;
				};

				$scope.edit = function() {
					matricFactory.getMetricSettings($scope.metric.Id).then(function(data) {
						$scope.metricSettings = data;
						$scope.isEdit = true;
						$scope.isLoading = false;
					});
					$scope.isLoading = true;
				};

				$scope.changeMetricType = function() {
					matricFactory.getMetricSpecificSettings($scope.metric.Id).then(function(data) {
						$scope.metricSettings.ChartScope = data.ChartScope;
						$scope.metricSettings.FuzzyDateType = data.FuzzyDateType;
					});
				}

				$scope.cancel = function() {
					$scope.isEdit = false;
				};

				$scope.save = function() {
					$scope.isEdit = false;
					$scope.isLoading = true;

					matricFactory.save($scope.metric).then(function(data) {
						if ($scope.metric.Id == 0) {
							$scope.$parent.tiles.push(data.Id);
							$scope.metric = $scope.getNewMetric();
						} else {
							$scope.load($scope.metric.Id);
						}

						$scope.isLoading = false;
					});
				};

				$scope.$on('onCreateTileClick', function() {
					if ($scope.isNew() && !$scope.isEdit && !$scope.isLoading) {
						$scope.new();
					}
				});
			}
		]);
})();