import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PieController,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PieController
);

const PieChart = (chartData) => {
  

  return (
    <div>
      <Pie
        data={{
          labels: JSON.parse(chartData.chartData.ActionType),
          datasets: [
            {
              label: "Request Summary",
              data: JSON.parse(chartData.chartData.Data),
              backgroundColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
            },
          ],
        }}
        height={376}
        width={644}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Order Summary by Type",
          },
          legend: {
            position: "top",
            labels: {
              fontSize: 25,
            },
          },
          responsive: true,
          plugins: {
            datalabels: {
              font: function (context) {
                var width = context.chart.width;
                var size = Math.round(width / 32);

                return {
                  weight: "bold",
                  size: size,
                };
              },
            },
          },
        }}
      />
    </div>
  );
};

export default PieChart;
