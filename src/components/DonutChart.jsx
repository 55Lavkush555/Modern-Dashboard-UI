import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 65 },
  { name: "Processing", value: 25 },
  { name: "Cancelled", value: 10 },
];

const COLORS = ["#8b5cf6", "#06b6d4", "#ef4444"];

function DonutChart() {
  return (
    <div style={{ width: "100%", height: 300, position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}   // 👈 donut banane ke liye
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Text */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "black",
        }}
      >
        <h2 style={{ margin: 0 }}>2,847</h2>
        <p style={{ margin: 0, fontSize: "12px" }}>Total Orders</p>
      </div>
    </div>
  );
}

export default DonutChart;