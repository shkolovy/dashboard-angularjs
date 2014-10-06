namespace DashboardAngularJs.Models
{
	public enum MetricType
	{
		None = -1,
		AfterHoursDriving = 1,
		AverageSpeed = 2,
		DistanceTraveled = 3,
		HighSpeed = 4
	}

	public enum MetricChartType
	{
		Rank = 0,
		Trend = 1,
		Gauge = 2
	}

	public enum MetricEntityType
	{
		Groups = 0,
		Vehicles = 1,
		Drivers = 2,
		Group = 3
	}

	public enum MetricStatType
	{
		AveragePerDay = 0,
		AveragePerGroup = 1,
		AveragePerVehicle = 2,
		AveragePerDriver = 3,
		Total = 4
	}

	public enum FuzzyDateType
	{
		// Weeks
		ThisWeek = 10,
		LastWeek = 11,
		LastSevenDays = 12,
		LastWorkWeek = 13,
		TwoWeeksAgo = 14,
		ThreeWeeksAgo = 15,
		FourWeeksAgo = 16,
	}

	public enum MetricChartScope
	{
		TopTen = 0,
		TopFifty = 1,
		BottomTen = 2,
		BottomFifty = 3
	}
}