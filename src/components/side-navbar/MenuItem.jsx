const MenuItem = (props) => {
  let active = "";
  if (props.data.active) {
    active = "active";
  }
  return (
    <div className={active}>
      {props.data.icon}
      <p> {props.data.label}</p>
    </div>
  );
};

export default MenuItem;
