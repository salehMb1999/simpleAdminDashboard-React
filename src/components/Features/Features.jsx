import SouthIcon from "@mui/icons-material/South";
import NorthIcon from "@mui/icons-material/North";
import Chart from "../Chart/Chart";
import xAxisData from "../../datas";
import SmallWd from "../Widgets/SmallWd";
import LargeWd from "../Widgets/LargeWd";
const data = xAxisData;
export default function Features() {
  return (
    <>
      <div className="w-5/6">
        <div className="flex justify-center items-center gap-10">
          <div className="shadow-md shadow-slate-400 p-8  rounded-lg w-1/3">
            <p className="text-slate-600 text-xl">Revanue</p>
            <div className="flex gap-5 justify-start my-5 items-center">
              <span className="font-bold text-3xl">$2,415</span>
              <div className="flex justify-center items-center gap-1">
                <span className="text-slate-700">-11.4</span>
                <SouthIcon className="text-red-500" />
              </div>
            </div>
            <p className="text-lg text-slate-400">Compared to last month</p>
          </div>
          <div className="shadow-md shadow-slate-400 p-8  rounded-lg w-1/3">
            <p className="text-slate-600 text-xl">Sales</p>
            <div className="flex gap-5 justify-start my-5 items-center">
              <span className="font-bold text-3xl">$4,415</span>
              <div className="flex justify-center items-center gap-1">
                <span className="text-slate-700">-1.4</span>
                <SouthIcon className="text-red-500" />
              </div>
            </div>
            <p className="text-lg text-slate-400">Compared to last month</p>
          </div>
          <div className="shadow-md shadow-slate-400 p-8  rounded-lg w-1/3">
            <p className="text-slate-600 text-xl">Cost</p>
            <div className="flex gap-5 justify-start my-5 items-center">
              <span className="font-bold text-3xl">$2,225</span>
              <div className="flex justify-center items-center gap-1">
                <span className="text-slate-700">+2.4</span>
                <NorthIcon className="text-green-500" />
              </div>
            </div>
            <p className="text-lg text-slate-400">Compared to last month</p>
          </div>
        </div>
        <div>
          <Chart grid title="Month Sale" data={data} dataKey="sale" />
        </div>
        <div className="flex justify-center items-start gap-x-6">
          <SmallWd />
          <LargeWd />
        </div>
      </div>
    </>
  );
}
