import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Progress", value: 80 },
  { name: "Remaining", value: 20 },
];

function ProgressRing() {
  return (
    <div style={{ width: 250, height: 250, position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
            innerRadius={80}
            outerRadius={100}
            paddingAngle={10} // 👈 segments gap
          >
            <Cell fill="#06b6d4" />   {/* progress */}
            <Cell fill="#1f2937" />   {/* background */}
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
          color: "white",
        }}
      >
        <h1 style={{ margin: 0 }}>80%</h1>
        <p style={{ margin: 0, fontSize: "12px", color: "#9ca3af" }}>
          Target Reached
        </p>
      </div>
    </div>
  );
}

export default ProgressRing;