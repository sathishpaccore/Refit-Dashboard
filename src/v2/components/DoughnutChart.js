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
import { Doughnut, Pie } from "react-chartjs-2";

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
    <div style={{height: "280px"}}>
      <Doughnut
        data={{
            labels: ['Red', 'Blue', 'Yellow'],
          datasets: [
            {
              label: "Request Summary",
              data : [12,19,3],
              backgroundColor: [
                "#00000",
                "#01966B",
                "#FFCC91",
         
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
