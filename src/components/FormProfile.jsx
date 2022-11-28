import React from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";

function FormProfile() {
  // const [dataProfile, setDataProfile] = useState({});
  // const getDataProfile = (e) => {
    
  // };
  // const handleProfile = (e) => {
  //   console.log(dataProfile);
  // };
  return (
    <div className="shadow rounded mx-5 py-3">
      {/* <Form onSubmit={(e) => handleProfile(e)}> */}
        <Form>
        <Stack gap={3} className="mx-auto">
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              Username
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              Email
            </Form.Label>
            <Col lg="9">
              <Form.Control type="email" placeholder="Email" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintextPassword">
            <Form.Label column lg="3">
              Password
            </Form.Label>
            <Col lg="9">
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <Form.Group controlId="duedate">
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              Age
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              height
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              weight
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              Jobs
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              Locations
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
        </Stack>
        
      <Stack gap={2} className="col-md-3 mx-auto">
        <Button variant="primary" type="submit" >Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
      </Form>
    </div>
  );
}

export default FormProfile;
