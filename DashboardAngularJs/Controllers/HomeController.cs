using System;
using System.Collections.Generic;
using System.Threading;
using System.Web.Mvc;
using System.Web.UI.WebControls;
using DashboardAngularJs.Models;

namespace DashboardAngularJs.Controllers
{
	public class HomeController : Controller
	{
		public ActionResult Index()
		{
			return View();
		}

		public ActionResult GetMetricSpecificSettings(MetricType metricType)
		{
			var m = new DashboardMetric
			{
				ChartScope = MetricChartScope.TopTen,
				FuzzyDateType = FuzzyDateType.TwoWeeksAgo
			};

			return Json(new DashboardMetricSpecificSettingsViewModel
			{
				ChartScope = m.ChartScope.ToString("d"),
				FuzzyDateType = m.FuzzyDateType.ToString("d")
			}, JsonRequestBehavior.AllowGet);
		}

		public ActionResult GetMetricSettings(int id)
		{
			Thread.Sleep(1000);

			//get this from db
			var m = new DashboardMetric
			{
				DashboardId = 1,
				MetricType = MetricType.AverageSpeed,
				ChartScope = MetricChartScope.TopFifty,
				StatType = MetricStatType.AveragePerVehicle,
				ChartType = MetricChartType.Rank,
				FuzzyDateType = FuzzyDateType.LastWeek
			};

			var mt = new List<ListItem>();
			foreach (MetricType enumValue in Enum.GetValues(typeof (MetricType)))
			{
				mt.Add(new ListItem(enumValue.ToString(), enumValue.ToString("d")));
			}

			var cs = new List<ListItem>();
			foreach (MetricChartScope enumValue in Enum.GetValues(typeof(MetricChartScope)))
			{
				cs.Add(new ListItem(enumValue.ToString(), enumValue.ToString("d")));
			}

			var st = new List<ListItem>();
			foreach (MetricStatType enumValue in Enum.GetValues(typeof(MetricStatType)))
			{
				st.Add(new ListItem(enumValue.ToString(), enumValue.ToString("d")));
			}

			var ct = new List<ListItem>();
			foreach (MetricChartType enumValue in Enum.GetValues(typeof(MetricChartType)))
			{
				ct.Add(new ListItem(enumValue.ToString(), enumValue.ToString("d")));
			}

			var me = new List<ListItem>();
			foreach (MetricEntityType enumValue in Enum.GetValues(typeof(MetricEntityType)))
			{
				me.Add(new ListItem(enumValue.ToString(), enumValue.ToString("d")));
			}

			var fd = new List<ListItem>();
			foreach (FuzzyDateType enumValue in Enum.GetValues(typeof(FuzzyDateType)))
			{
				fd.Add(new ListItem(enumValue.ToString(), enumValue.ToString("d")));
			}

			var model = new DashboardMetricSettingsViewModel
			{
				DashboardId = id,
				MetricId = m.MetricId,
				MetricType = m.MetricType.ToString("d"),
				ChartType = m.ChartType.ToString("d"),
				ChartScope = m.ChartScope.ToString("d"),
				EntityType = m.EntityType.ToString("d"),
				StatType = m.StatType.ToString("d"),
				FuzzyDateType = m.FuzzyDateType.ToString("d"),
				MetricTypes = mt,
				ChartScopes = cs,
				StatTypes = st,
				ChartTypes = ct,
				FuzzyDateTypes = fd,
				EntityTypes = me

			};

			return Json(model, JsonRequestBehavior.AllowGet);
		}

		public ActionResult GetDashboards()
		{
			return Json(new List<Dashboard>
			{
				new Dashboard {Id = 1, Title = "Dashboard 1", Metrics = new[] {1, 2, 3}},
				new Dashboard {Id = 2, Title = "Dashboard 2", Metrics = new[] {4, 5, 6, 7, 8, 9, 10}},
				new Dashboard {Id = 3, Title = "Dashboard 3", Metrics = new[] {11}},
			}, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult SaveMetric(Metric metric)
		{
			Thread.Sleep(1000);

			if (metric.Id == 0)
			{
				metric.Id = new Random().Next(17, 1000);
			}

			return Json(metric, JsonRequestBehavior.AllowGet);
		}

		[HttpPost]
		public ActionResult RemoveMetric(int id)
		{
			Thread.Sleep(2000);

			return Json(new {success = true}, JsonRequestBehavior.AllowGet);
		}

		public ActionResult GetMetric(int id)
		{
			Thread.Sleep(2000);

			return Json(new
				Metric
			{
				Id = id,
				Title = "metric " + id
			}, JsonRequestBehavior.AllowGet);
		}
	}
}