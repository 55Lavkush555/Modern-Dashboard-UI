import "./css/customer.css";

const data = [
  { label: "New Customers", value: 45, color: "purple" },
  { label: "Returning", value: 72, color: "blue" },
  { label: "VIP Members", value: 28, color: "green" },
  { label: "Inactive", value: 15, color: "gray" },
];

function CustomerDistribution() {
  return (
    <div className="card">
      <h3>Customer Distribution</h3>

      {data.map((item, index) => (
        <div key={index} className="progress-item">
          <div className="label-row">
            <span>{item.label}</span>
            <span>{item.value}%</span>
          </div>

          <div className="progress-bar">
            <div
              className={`progress-fill ${item.color}`}
              style={{ width: `${item.value}%` }}
            ></div>
          </div>
        </div>
      ))}

      <div className="total">
        <span>Total Customers</span>
        <h2>1,429</h2>
      </div>
    </div>
  );
}

export default CustomerDistribution;