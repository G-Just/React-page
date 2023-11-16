import "./activities.css";
import Pfp from "../../media/pfp.jpg";
import { ActivitiesEvent } from "./ActivitiesEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faBell } from "@fortawesome/free-solid-svg-icons";

export function Activities() {
  const events = [
    {
      pfp: <img src={Pfp} alt="Pfp" />,
      flag: <FontAwesomeIcon icon={faFlag} />,
      flagLabel: " New invoice",
      user: "Francisco Gibbs",
      event: "created invoice",
      invoiceNumber: "PQ-4991C",
      time: "Just Now",
    },
    {
      pfp: <FontAwesomeIcon icon={faBell} />,
      event: "reminder was sent to",
      user: "Invoice JL-3432B",
      recipient: "Chester Corp",
      time: "Friday, 12:26PM",
    },
    {
      pfp: <img src={Pfp} alt="Pfp" />,
      user: "John Doe",
      event: "created invoice",
      invoiceNumber: "XX-0000X",
      time: "Monday 3:42PM",
    },
  ];
  return (
    <div id="activities">
      {events.map((event) => {
        return <ActivitiesEvent data={event} />;
      })}
    </div>
  );
}
