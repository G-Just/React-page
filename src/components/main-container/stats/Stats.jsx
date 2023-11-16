import "./stats.css";
import StatsEntry from "./StatsEntry";
import OrangeCircle from "../../media/orange_circ.svg";
import GreenCircle from "../../media/green_circ.svg";
import BlueCircle from "../../media/blue_circ.svg";
import RedCircle from "../../media/red_circ.svg";

export function Stats() {
  const data = [
    {
      icon: OrangeCircle,
      label: "Total Revenue",
      volume: "$ 216k",
      flag: { change: "$341", net: true },
    },
    {
      icon: GreenCircle,
      label: "Invoices",
      volume: " 2,221",
      flag: { change: "121", net: true },
    },
    {
      icon: BlueCircle,
      label: "Clients",
      volume: " 1,423",
      flag: { change: "91", net: true },
    },
    {
      icon: RedCircle,
      label: "Loyalty",
      volume: " 78%",
      flag: { change: "1%", net: false },
    },
  ];
  return (
    <div id="stats">
      {data.map((datalist) => (
        <StatsEntry data={datalist} />
      ))}
    </div>
  );
}
