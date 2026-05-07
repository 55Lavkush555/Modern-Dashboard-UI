import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Jan", users: 400 },
  { name: "Feb", users: 800 },
  { name: "Mar", users: 600 },
  { name: "Apr", users: 1200 },
  { name: "May", users: 900 },
  { name: "Jun", users: 1000 },
  { name: "Jul", users: 700 },
  { name: "Aug", users: 750 },
  { name: "Sep", users: 850 },
  { name: "Oct", users: 950 },
  { name: "Nov", users: 1300 },
  { name: "Dec", users: 1500 },
];

function MyLineChart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default MyLineChart;