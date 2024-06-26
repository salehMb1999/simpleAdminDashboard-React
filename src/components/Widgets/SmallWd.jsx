import VisibilityIcon from "@mui/icons-material/Visibility";
import { transactions } from "../../datas";

export default function SmallWd() {
  return (
    <div className="shadow-md shadow-slate-400 p-5 rounded-lg w-1/3">
      <h3 className="font-bold text-lg mb-5">New Join Members</h3>
      <div className="flex flex-col gap-y-4">
        {transactions.map((data) => {
          return (
            <div
              className="flex justify-between items-center p-2 shadow-sm shadow-slate-300 rounded-lg border-t-2"
              key={data.id}
            >
              <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                <img className="w-full" src={data.img} alt="profile" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-bold">{data.customer}</p>
                <p className="text-slate-700">{data.job}</p>
              </div>
              <div className="bg-slate-300 text-slate-600 px-3 py-1 rounded-md">
                <VisibilityIcon />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
