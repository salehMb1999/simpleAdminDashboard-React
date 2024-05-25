import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import propTypes from "prop-types";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <>
      <div className="my-7 shadow-md shadow-slate-400 p-6  rounded-lg">
        <h3 className="mb-8 font-bold text-xl">{title}</h3>
        <ResponsiveContainer width="100%" aspect="4">
          <LineChart data={data}>
            <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
            {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
            <XAxis dataKey="name" stroke="#5550bd" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
Chart.propTypes = {
  title: propTypes.string.isRequired,
  data: propTypes.string.isRequired,
  dataKey: propTypes.string.isRequired,
  grid: propTypes.string.isRequired,
};
