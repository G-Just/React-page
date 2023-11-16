export function GraphItem(props) {
  return (
    <div>
      <div
        id="graphBar"
        class={props.data.active}
        style={{ height: props.data.bar }}
      ></div>
      <p>{props.data.label}</p>
    </div>
  );
}
