export default function LargeWd() {
  return (
    <div className="shadow-md shadow-slate-400 p-8  rounded-lg w-2/3">
      <h3 className="font-bold text-xl mb-5">Latest TransActions</h3>
      <table className="w-full">
        <tr className="flex justify-between mb-5 px-7">
          <th>Customer</th>
          <div className="flex items-center gap-x-56">
            <th>Date</th>
            <div className="flex items-center gap-x-40">
              <th>Amount</th>
              <th>Status</th>
            </div>
          </div>
        </tr>
        <tr className="flex justify-between mb-4 shadow-sm shadow-slate-300 rounded-lg border-t-2 p-2">
          <td>
            <div className="flex justify-center items-center gap-4 text-lg">
              <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                <img className="w-full" src="/images/tom.jpg" alt="profile" />
              </div>
              <p>Saber</p>
            </div>
          </td>
          <div className="flex items-center gap-x-52">
            <td className="text-slate-500">12 June 2022</td>
            <div className="flex items-center gap-x-32">
              <td className="text-slate-500">$123</td>
              <td className="bg-green-200 px-3 py-1 rounded-lg text-green-600">
                Approved
              </td>
            </div>
          </div>
        </tr>
        <tr className="flex justify-between mb-4 shadow-sm shadow-slate-300 rounded-lg border-t-2 p-2">
          <td>
            <div className="flex justify-center items-center gap-4 text-lg">
              <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                <img className="w-full" src="/images/tom.jpg" alt="profile" />
              </div>
              <p>Saber</p>
            </div>
          </td>
          <div className="flex items-center gap-x-52">
            <td className="text-slate-500">12 June 2022</td>
            <div className="flex items-center gap-x-32">
              <td className="text-slate-500">$123</td>
              <td className="bg-blue-200 px-3 py-1 rounded-lg text-blue-600">
                Pending
              </td>
            </div>
          </div>
        </tr>
        <tr className="flex justify-between mb-4 shadow-sm shadow-slate-300 rounded-lg border-t-2 p-2">
          <td>
            <div className="flex justify-center items-center gap-4 text-lg">
              <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                <img className="w-full" src="/images/tom.jpg" alt="profile" />
              </div>
              <p>Saber</p>
            </div>
          </td>
          <div className="flex items-center gap-x-52">
            <td className="text-slate-500">12 June 2022</td>
            <div className="flex items-center gap-x-32">
              <td className="text-slate-500">$123</td>
              <td className="bg-red-200 px-3 py-1 rounded-lg text-red-600">
                Declined
              </td>
            </div>
          </div>
        </tr>
        <tr className="flex justify-between mb-4 shadow-sm shadow-slate-300 rounded-lg border-t-2 p-2">
          <td>
            <div className="flex justify-center items-center gap-4 text-lg">
              <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                <img className="w-full" src="/images/tom.jpg" alt="profile" />
              </div>
              <p>Saber</p>
            </div>
          </td>
          <div className="flex items-center gap-x-52">
            <td className="text-slate-500">12 June 2022</td>
            <div className="flex items-center gap-x-32">
              <td className="text-slate-500">$123</td>
              <td className="bg-green-200 px-3 py-1 rounded-lg text-green-600">
                Approved
              </td>
            </div>
          </div>
        </tr>
      </table>
    </div>
  );
}
