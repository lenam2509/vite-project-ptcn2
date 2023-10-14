import Donutchart from "../../components/Donutchart";
import Linechart from "../../components/Linechart";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-around">
        <div className="w-[300px] min-h-[200px] flex flex-col items-center justify-center shadow-lg rounded border border-slate-200">
          <h1 className="text-2xl text-center font-bold">Tổng doanh thu</h1>
          <p className="text-center text-3xl font-bold text-green-400">
            100.000.000 VND
          </p>
        </div>
        <div className="w-[300px] min-h-[200px] flex flex-col items-center justify-center shadow-lg rounded border border-slate-200">
          <h1 className="text-2xl text-center font-bold">
            Tổng sản phẩm đã bán
          </h1>
          <p className="text-center text-3xl font-bold text-green-400">20</p>
        </div>
        <div className="w-[300px] min-h-[200px] flex flex-col items-center justify-center shadow-lg rounded border border-slate-200">
          <h1 className="text-2xl text-center font-bold">Tổng hóa đơn</h1>
          <p className="text-center text-3xl font-bold text-green-400">10</p>
        </div>
      </div>
      <div className="flex mt-4 ">
        <Linechart />
        <Donutchart />
      </div>
    </div>
  );
}
