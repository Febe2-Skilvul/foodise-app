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
    <div className="shadow rounded" style={{"margin":"2em"}}>
      {/* <Form onSubmit={(e) => handleProfile(e)}> */}
        <Form className="p-5">
        <Stack gap={3} className="mx-5">
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
          <Form.Group as={Row} className="" controlId="date">
            <Form.Label column lg="3">
              Date Birth
            </Form.Label>
            <Col lg="9">
              <Form.Control
                type="date"
                name="duedate"
                placeholder="Due date"
                  // value={date}
                  // onChange={(e) => setDate(e.target.value)}
              />
            </Col>
            </Form.Group>
          <Form.Group as={Row} className="" controlId="formPlaintext">
            <Form.Label column lg="3">
              Age
            </Form.Label>
            <Col lg="9">
              <Form.Control type="text" placeholder="text" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="">
          <Form.Label column lg="3">
              Gender
            </Form.Label>
            <Col lg="9">
        <Form.Select aria-label="Gender">
          <option>Your Gender</option>
          <option value="male">Pria</option>
          <option value="female">Wanita</option>
        </Form.Select>
              
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
        
      <Stack gap={2} className="col-md-3 mx-auto mt-5">
        <Button variant="primary" type="submit" >Save changes</Button>
        <Button variant="outline-secondary">Cancel</Button>
      </Stack>
      </Form>
    </div>
  );
}

export default FormProfile;
