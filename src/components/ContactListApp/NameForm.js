import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import { nanoid } from "nanoid";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  address: "",
  number: "",
};
function NameForm({ addTable }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTable = {
      firstName,
      lastName,
      address,
      number,
      id: nanoid(),
    };
    addTable(newTable);
    setState(INITIAL_STATE);
  };

  return (
    <div className="div2">
      <Form onSubmit={handleSubmit} className="form2">
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="inputs2">
            First Name
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="firstName"
            placeholder="First name..."
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="inputs2">
            Last Name
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="lastName"
            placeholder="Last Name..."
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="inputs2">
            Address
          </InputGroup.Text>
          <Form.Control
            type="text"
            name="address"
            placeholder="Address..."
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="inputGroup-sizing-default" className="inputs2">
            Phone Number
          </InputGroup.Text>
          <Form.Control
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            type="tel"
            name="number"
            id="number"
            placeholder="Phone number..."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </InputGroup>
        <Button variant="success" className="btn2" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default NameForm;
