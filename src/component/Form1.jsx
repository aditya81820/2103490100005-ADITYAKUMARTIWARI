import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Secondscreen from './secondscreen';

export default function Form1() {
  const [isSecondScreen, setIsSecondScreen] = useState(false);

  const handleChange = (event) => {
    // Handle form input changes (if needed)
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setIsSecondScreen(true);
  };

  return (
    <div>
      {isSecondScreen ? (
        <Secondscreen/> // Display the second screen component
      ) : (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name" onChange={handleChange} />
            <Form.Text className="text-muted">
              We'll never share your Name with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Enter any Id</Form.Label>
            <Form.Control type="text" placeholder="Input any id No." name="id" onChange={handleChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
}
