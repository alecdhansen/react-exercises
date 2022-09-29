import NameForm from "./NameForm";
import NameTable from "./NameTable";
import { useState } from "react";

const INITIAL_TABLE = [
  {
    firstName: "Allen",
    lastName: "Bates",
    number: "864-555-4957",
    address: "123 Streit St.",
    id: 1,
  },
  {
    firstName: "Corrie",
    lastName: "Duggar",
    number: "864-555-2498",
    address: "456 Layne Ln.",
    id: 2,
  },
  {
    firstName: "Eli",
    lastName: "Foster",
    number: "864-555-4937",
    address: "789 Rhode Rd.",
    id: 3,
  },
];

function ContactListApp() {
  const [table, setTable] = useState(INITIAL_TABLE);
  const addTable = (newTable) => {
    setTable([...table, newTable]);
  };
  return (
    <div className="contact-list-form">
      <NameForm addTable={addTable} />
      <NameTable table={table} />
    </div>
  );
}

export default ContactListApp;
