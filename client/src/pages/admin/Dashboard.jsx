import { useState, useEffect } from "react";
import Donutchart from "../../components/Donutchart";
import Linechart from "../../components/Linechart";
import AxiosConfig from "../../axios/AxiosConfig";

export default function Dashboard() {
  const [totalMoney, setTotalMoney] = useState(0);
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalBill, setTotalBill] = useState(0);
  const [month, setMonth] = useState(
    new Date().toLocaleString("en-US", { month: "numeric" })
  );
  const [year, setYear] = useState(
    new Date().toLocaleString("en-US", { year: "numeric" })
  );

  useEffect(() => {
    const getTotalMoney = async () => {
      const res = await AxiosConfig.get(
        `/api/statistical/revenue?month=${month}&year=${year}`
      );
      setTotalMoney(res.data.total);
    };
    getTotalMoney();
  }, [month, year]);

  useEffect(() => {
    const getTotalProduct = async () => {
      const res = await AxiosConfig.get(`/api/statistical/producstsold`);
      setTotalProduct(res.data.total);
    };
    getTotalProduct();
  }, []);

  useEffect(() => {
    const getTotalBill = async () => {
      const res = await AxiosConfig.get(`/api/statistical/bills`);
      setTotalBill(res.data.totalBill);
    };
    getTotalBill();
  }, []);

  return (
    <div>
      <div className="flex justify-around">
        <div className="w-[300px] min-h-[200px] flex flex-col items-center justify-center shadow-lg rounded border border-slate-200">
          <h1 className="text-2xl text-center font-bold">Tổng doanh thu</h1>
          <p className="text-center text-3xl font-bold text-green-400">
            {totalMoney.toLocaleString("vi-VN")}VND
          </p>
        </div>
        <div className="w-[300px] min-h-[200px] flex flex-col items-center justify-center shadow-lg rounded border border-slate-200">
          <h1 className="text-2xl text-center font-bold">
            Tổng sản phẩm đã bán
          </h1>
          <p className="text-center text-3xl font-bold text-green-400">
            {totalProduct}
          </p>
        </div>
        <div className="w-[300px] min-h-[200px] flex flex-col items-center justify-center shadow-lg rounded border border-slate-200">
          <h1 className="text-2xl text-center font-bold">
            Tổng hóa đơn đang có
          </h1>
          <p className="text-center text-3xl font-bold text-green-400">
            {totalBill}
          </p>
        </div>
      </div>
      <div className="flex mt-4 ">
        <Linechart />
        <Donutchart />
      </div>
    </div>
  );
}
