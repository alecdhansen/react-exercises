import Table from "react-bootstrap/Table";

function NameTable({ table }) {
  const tableContent = table.map(
    ({ firstName, lastName, address, number, id }) => (
      <tr key={id}>
        <td>
          {firstName} {lastName}
        </td>
        <td>{address}</td>
        <td>{number}</td>
      </tr>
    )
  );

  return (
    <div className="div2">
      <Table striped bordered hover className="table2">
        <tbody className="body2">{tableContent}</tbody>
      </Table>
    </div>
  );
}

export default NameTable;
