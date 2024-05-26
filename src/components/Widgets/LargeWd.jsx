export default function LargeWd() {
  return (
    <div className="shadow-md shadow-slate-400 px-6 py-2  rounded-lg w-2/3">
      <h3 className="font-bold text-xl mb-5">Latest Transactions</h3>
      <table className="w-full">
        <thead>
          <tr className="flex justify-between mb-5 px-7">
            <th>Customer</th>
            <th className="flex items-center gap-x-52">
              <div>Date</div>
              <div className="flex items-center gap-x-36">
                <div>Amount</div>
                <div>Status</div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="flex justify-between mb-4 shadow-sm shadow-slate-300 rounded-lg border-t-2 p-2">
            <td>
              <div className="flex justify-center items-center gap-4 text-lg">
                <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                  <img className="w-full" src="/images/tom.jpg" alt="profile" />
                </div>
                <p>Saber</p>
              </div>
            </td>
            <td className="flex items-center gap-x-52">
              <div className="text-slate-500">12 June 2022</div>
              <div className="flex items-center gap-x-32">
                <div className="text-slate-500">$123</div>
                <div className="bg-green-200 px-3 py-1 rounded-lg text-green-600">
                  Approved
                </div>
              </div>
            </td>
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
            <td className="flex items-center gap-x-52">
              <div className="text-slate-500">12 June 2022</div>
              <div className="flex items-center gap-x-32">
                <div className="text-slate-500">$123</div>
                <div className="bg-blue-200 px-3 py-1 rounded-lg text-blue-600">
                  Pending
                </div>
              </div>
            </td>
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
            <td className="flex items-center gap-x-52">
              <div className="text-slate-500">12 June 2022</div>
              <div className="flex items-center gap-x-32">
                <div className="text-slate-500">$123</div>
                <div className="bg-red-200 px-3 py-1 rounded-lg text-red-600">
                  Declined
                </div>
              </div>
            </td>
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
            <td className="flex items-center gap-x-52">
              <div className="text-slate-500">12 June 2022</div>
              <div className="flex items-center gap-x-32">
                <div className="text-slate-500">$123</div>
                <div className="bg-green-200 px-3 py-1 rounded-lg text-green-600">
                  Approved
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
