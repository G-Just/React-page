import { InvoiceEntry } from "./InvoiceEntry";
import "./invoices.css";

export function Invoices() {
  const invoices = [
    {
      number: "PQ-4491C",
      date: "3 Jul, 2022",
      client: "Daniel Padilia",
      amount: "$ 2,450",
      status: "PAID",
    },
    {
      number: "XX-0000X",
      date: "3 Jul, 2022",
      client: "John Doe",
      amount: "$ 100,450",
      status: "PAID",
    },
    {
      number: "IN-9911J",
      date: "21 May, 2021",
      client: "Christina Jacobs",
      amount: "$ 14,810",
      status: "OVERDUE",
    },
    {
      number: "UV-2319A",
      date: "14 Apr, 2020",
      client: "Elizabeth Bailey",
      amount: "$ 450",
      status: "PAID",
    },
  ];
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
        {invoices.map((invoiceEntry) => {
          return <InvoiceEntry data={invoiceEntry} />;
        })}
      </table>
    </div>
  );
}
