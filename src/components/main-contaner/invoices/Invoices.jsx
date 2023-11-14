import { InvoiceEntry } from "./InvoiceEntry";
import "./invoices.css";

export function Invoices() {
  return (
    <div id="invoices">
      <h1>Recent Invoices</h1>
      <table>
        <tr>
          <th>No</th>
          <th>Date Created</th>
          <th>Client</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </table>
      <InvoiceEntry />
      <InvoiceEntry />
    </div>
  );
}
