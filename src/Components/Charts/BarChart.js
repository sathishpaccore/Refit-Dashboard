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
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartDataLabels
);

const BarChart = ({ chartData }) => {
  const Total = JSON.parse(chartData.Total);
  const ActionType = JSON.parse(chartData.ActionType);
  const StatusCount = JSON.parse(chartData.StatusCount);

  let datas = {};
  datas = {
    labels: ActionType,
    datasets: [
      {
        label: "Total Requests",
        data: Total,
        backgroundColor: ["rgba(4, 103, 187, 0.5)"],
        borderColor: "rgba(4, 103, 187, 0.9)",
        borderWidth: "0",
      },
      {
        label: "Completed",
        data: StatusCount,
        backgroundColor: ["rgba(0,0,0,0.07)"],
        borderColor: "rgba(0,0,0,0.09)",
        borderWidth: "0",
      },
    ],
  };
  return (
    <div>
      <Bar
        data={datas}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {},
          title: {
            display: true,
            text: "Order Summary by Status",
          },
        }}
        plugins={[ChartDataLabels]}
      />
    </div>
  );
};

export default BarChart;
