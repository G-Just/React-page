import MenuItem from "./MenuItem";
import "./sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faTableList,
  faUsers,
  faTag,
  faComments,
  faGear,
  faCircleQuestion,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export function Menu() {
  const listItems = [
    { label: "Home", icon: <FontAwesomeIcon icon={faHouse} />, active: true },
    { label: "Invoices", icon: <FontAwesomeIcon icon={faTableList} /> },
    { label: "Clients", icon: <FontAwesomeIcon icon={faUsers} /> },
    { label: "Products", icon: <FontAwesomeIcon icon={faTag} /> },
    { label: "Messages", icon: <FontAwesomeIcon icon={faComments} /> },
    { label: "Settings", icon: <FontAwesomeIcon icon={faGear} /> },
    { label: "Help", icon: <FontAwesomeIcon icon={faCircleQuestion} /> },
  ];
  return (
    <div id="sideNavbar">
      <h1>Invo.</h1>
      <ul>
        {listItems.map((listItem) => (
          <MenuItem data={listItem} />
        ))}
      </ul>
      <MenuItem
        data={{ label: "Log Out", icon: <FontAwesomeIcon icon={faRightFromBracket} /> }}
      />
    </div>
  );
}
