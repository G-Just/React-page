import { Graph } from "./graph/Graph";
import { Stats } from "./stats/Stats";
import { Ad } from "./ad/Ad";
import { Activities } from "./activities/Activities";
import { Invoices } from "./invoices/Invoices.jsx";

export function Main() {
  return (
    <div id="main" style={{ marginTop: "145px", paddingLeft: "10px" }}>
      <Stats />
      <div style={{ display: "flex", marginTop: "20px", gap: "20px", height: "400px" }}>
        <Graph />
        <Ad />
      </div>
      <div style={{ display: "flex", marginTop: "20px", gap: "20px", height: "400px" }}>
        <Activities />
        <Invoices />
      </div>
    </div>
  );
}
