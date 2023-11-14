import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import "./topnavbar.css";
import Pfp from "../media/pfp.jpg";
export function TopNavbar() {
  return (
    <div id="topNavbar">
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} id="icon" />
        <input type="text" name="search" id="search" placeholder="Tap to search" />
      </div>
      <div>
        <FontAwesomeIcon icon={faBell} id="bell" />
        <img src={Pfp} alt="PFP" />
        <div>
          <h1>John Doe</h1>
          <p>Page Admin</p>
        </div>
      </div>
    </div>
  );
}
