import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import AxiosConfig from "../axios/AxiosConfig";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Linechart() {
  const [revenue, setRevenue] = useState([]);
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "numeric" })
  );
  const [year, setYear] = useState(
    new Date().toLocaleString("en-US", { year: "numeric" })
  );

  const data = {
    // labels: [
    //   "Tháng 1",
    //   "Tháng 2",
    //   "Tháng 3",
    //   "Tháng 4",
    //   "Tháng 5",
    //   "Tháng 6",
    //   "Tháng 7",
    //   "Tháng 8",
    //   "Tháng 9",
    //   "Tháng 10",
    //   "Tháng 11",
    //   "Tháng 12",
    // ],
    datasets: [
      {
        label: "Tổng doanh thu 2023 (M)",
        data: revenue,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBackgroundColor: "rgba(255, 99, 132, 0.5)",
        pointBorderColor: "#fff",
      },
    ],
  };

  useEffect(() => {
    const getRevenue = async () => {
      const res = await AxiosConfig.get(
        `/api/statistical/revenue?month=${month}&year=${year}`
      );
      console.log(res.data);
      setRevenue(res.data);
    };
    getRevenue();
  }, [month, year]);

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="flex-auto h-[500px]">
      <Line data={data} options={options} className="w-full h-full" />
    </div>
  );
}
