injector = angular.injector(['ng', 'dashboard-controller']);

//TODO: factory has to be mocked here
var init = {
	setup: function() {
		this.$scope = injector.get('$rootScope').$new();
		injector.get('$controller')('dashboardController', {
			$scope: this.$scope
		});
	}
};

QUnit.module('dashboard controller tests', init);

QUnit.test('load function test', function (assert) {
	this.$scope.load();

	assert.ok(this.$scope.dashboards, 'dashboards were initialized');
});

QUnit.test('showTiles function test', function(assert) {
	var fakeDashboards = [{ "Id": 1, "Title": "Dashboard 1", "Metrics": [1, 2, 3] }, { "Id": 2, "Title": "Dashboard 2", "Metrics": [4, 5, 6, 7, 8, 9, 10] }, { "Id": 3, "Title": "Dashboard 3", "Metrics": [11] }];
	this.$scope.dashboards = fakeDashboards;

	this.$scope.showTiles(1);
	assert.deepEqual(this.$scope.tiles, [1, 2, 3], 'tiles were set');
});