import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Chart(props) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico",
      },
    },
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];
  const data1 = [
    "12",
    "32",
    "12",
    "43",
    "12",
    "32",
    "234",
  ];
  const data2 = [
    "232",
    "32",
    "12",
    "123",
    "565",
    "23",
    "23",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data1,
        backgroundColor: "#ffcc00",
      }
    ],
  };
  return (
    <>
      <div style={{ width: "500px", margin: "auto auto" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}

export default Chart;
