export function ActivitiesEvent(props) {
  return (
    <div>
      <div>{props.data.pfp}</div>
      <div>
        <label>
          {props.data.flag}
          {props.data.flagLabel}
        </label>
        <p>
          <span>{props.data.user} </span>
          {props.data.event}
          <span> {props.data.invoiceNumber}</span>
          <span> {props.data.recipient}</span>
        </p>
        <p>{props.data.time}</p>
      </div>
    </div>
  );
}
