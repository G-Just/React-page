import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faArrowTrendDown } from "@fortawesome/free-solid-svg-icons";

const StatsEntry = (props) => {
  let icon;
  let color;
  if (props.data.flag.net) {
    color = "positive";
    icon = <FontAwesomeIcon icon={faArrowTrendUp} />;
  } else {
    color = "negative";
    icon = <FontAwesomeIcon icon={faArrowTrendDown} />;
  }
  return (
    <>
      <div id="block">
        <div>
          <img src={props.data.icon} alt="bullet point icon" />
        </div>
        <div>
          <h1>{props.data.label}</h1>
          <div>
            <h1 id="volume">
              <span>{props.data.volume.split(" ")[0]} </span>
              {props.data.volume.split(" ")[1]}
            </h1>
            <label className={color}>
              {props.data.flag.change} {icon}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsEntry;
