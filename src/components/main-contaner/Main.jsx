import { Graph } from "./graph/Graph";
import { Stats } from "./stats/Stats";
import { Ad } from "./ad/Ad";

export function Main() {
  return (
    <div id="main">
      <Stats />
      <div style={{ display: "flex", marginTop: "20px", gap: "20px" }}>
        <Graph />
        <Ad />
      </div>
    </div>
  );
}
