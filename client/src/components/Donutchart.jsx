import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import AxiosConfig from "../axios/AxiosConfig";
import { useEffect, useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Donutchart() {
  const [bills, setBills] = useState([]);
  const data = {
    labels: ["chờ duyệt", "đang xử lý", "đã giao", "đã nhận hàng", "đã hủy"],
    datasets: [
      {
        label: "Hóa đơn",
        data: [
          bills.pending,
          bills.processing,
          bills.delivered,
          bills.completed,
          bills.cancelled,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  useEffect(() => {
    const getBills = async () => {
      const response = await AxiosConfig.get("/api/statistical/bills");
      setBills(response.data);
      console.log(bills);
    };
    getBills();
  }, []);
  return (
    <div className="flex-auto h-[500px]">
      <Doughnut data={data} />
    </div>
  );
}
