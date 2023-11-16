import { GraphItem } from "./GraphItem";
import "./graph.css";

export function Graph() {
  const graphItems = [
    { label: "Mar", bar: "50%" },
    { label: "Apr", bar: "30%" },
    { label: "May", bar: "10%" },
    { label: "Jun", bar: "60%", active: "BarActive" },
    { label: "Jul", bar: "30%" },
    { label: "Aug", bar: "40%" },
    { label: "Sep", bar: "30%" },
    { label: "Oct", bar: "40%" },
    { label: "Nov", bar: "40%" },
  ];
  return (
    <div id="graph">
      <h2>Monthly Revenue</h2>
      <h1>
        <span>$</span> 15,000
      </h1>
      <div id="graphArea">
        {graphItems.map((item) => {
          return <GraphItem data={item} />;
        })}
      </div>
    </div>
  );
}
