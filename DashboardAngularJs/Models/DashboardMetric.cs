namespace DashboardAngularJs.Models
{
	public class DashboardMetric
	{
		public int DashboardId { get; set; }
		public int MetricId { get; set; }
		public MetricType MetricType { get; set; }
		public MetricChartType ChartType { get; set; }
		public MetricChartScope ChartScope { get; set; }
		public MetricEntityType EntityType { get; set; }
		public MetricStatType StatType { get; set; }
		public FuzzyDateType FuzzyDateType { get; set; } 
	}
}