function DashboardRankingChart(series, yAxisMax, a, b, tooltipFormatter) {
	return {
		"chart": {
			"type": "bar",
			"height": 250,
			"width": 450,
		},
		"credits": false,
		"xAxis": [
			{ "categories": a, "tickWidth": 0, "gridLineWidth": 0, "lineWidth": 0 },
			{ "offset": 0, "lineWidth": 0, "categories": b, "tickWidth": 0, "title": { "text": null }, "opposite": true, "labels": { "align": 'right' } }
		],
		"yAxis": { "title": { "text": null }, "labels": { "enabled": false }, "tickWidth": 0, "gridLineWidth": 0, "max": yAxisMax },
		"legend": { "enabled": false },
		"title": { "text": null },
		"tooltip": {},
		"dataLabels": { style: { textShadow: '#fff 0px 0px 1px' } },
		"plotOptions": {
			"series": {
				"stacking": 'normal', "pointWidth": 18, "animation": false, "shadow": false
			}
		},
		"series": series
	};
};
