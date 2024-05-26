import PropTypes from "prop-types";

export default function LargeWd({ transactions }) {
  return (
    <div className="shadow-md shadow-slate-400 px-6 py-2 rounded-lg w-2/3">
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
          {transactions.map((data) => (
            <tr
              className="flex justify-between mb-4 shadow-sm shadow-slate-300 rounded-lg border-t-2 p-2"
              key={data.id}
            >
              <td>
                <div className="flex justify-center items-center gap-4 text-lg">
                  <div className="overflow-hidden w-14 border-2 border-red-400 h-14 rounded-full">
                    <img className="w-full" src={data.img} alt="profile" />
                  </div>
                  <p>{data.customer}</p>
                </div>
              </td>
              <td className="flex items-center gap-x-52">
                <div className="text-slate-500">{data.date}</div>
                <div className="flex items-center gap-x-32">
                  <div className="text-slate-500">${data.amount}</div>
                  <div
                    className={`px-3 py-1 rounded-lg ${
                      data.status === "Approved"
                        ? "bg-green-200 text-green-600"
                        : data.status === "Pending"
                        ? "bg-blue-200 text-blue-600"
                        : "bg-red-200 text-red-600"
                    }`}
                  >
                    {data.status}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

LargeWd.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      customer: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
