import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Navbar() {
  return (
    <nav className="bg-body-tertiary justify-content-between">
      <Form style={{ background: "#1c1f2a" }}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            ></Form.Control>
          </Col>
        </Row>
      </Form>
    </nav>
  );
}

export default Navbar;
