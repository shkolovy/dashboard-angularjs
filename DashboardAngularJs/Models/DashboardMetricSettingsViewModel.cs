using System.Collections.Generic;
using System.Web.UI.WebControls;

namespace DashboardAngularJs.Models
{
	public class DashboardMetricSettingsViewModel
	{
		public int DashboardId { get; set; }
		public string MetricType { get; set; }
		public int MetricId { get; set; }
		public string ChartType { get; set; }
		public string ChartScope { get; set; }
		public string EntityType { get; set; }
		public string StatType { get; set; }
		public string FuzzyDateType { get; set; }
		public List<ListItem> MetricTypes { get; set; }
		public List<ListItem> ChartScopes { get; set; }
		public List<ListItem> StatTypes { get; set; }
		public List<ListItem> ChartTypes { get; set; }
		public List<ListItem> EntityTypes { get; set; }
		public List<ListItem> FuzzyDateTypes { get; set; } 
	}
}