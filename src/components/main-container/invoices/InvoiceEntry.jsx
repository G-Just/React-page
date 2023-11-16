export function InvoiceEntry(props) {
  let color;
  if (props.data.status === "PAID") {
    color = "positive";
  } else {
    color = "negative";
  }
  return (
    <tr>
      <td>{props.data.number}</td>
      <td>{props.data.date}</td>
      <td>{props.data.client}</td>
      <td>{props.data.amount}</td>
      <td>
        <div className={color}>{props.data.status}</div>
      </td>
    </tr>
  );
}
