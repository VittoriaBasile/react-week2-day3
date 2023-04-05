import { Component } from "react";
import avatar from "../assets/avatar.png";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

class Profile extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={4}>
            <h1 className="text-light profile-title">Edit Profile</h1>
            <hr />

            <Row className="mt-4 pb-2">
              <Col xs={12} md="auto">
                <img src={avatar} className="img-fluid" width="150px" alt="avatar" />
              </Col>
              <Col xs={12} md>
                <Form.Control className="border-0 rounded-0" defaultValue="Epicoder #1" type="text" />
                <div className="mb-4 mt-4">
                  <h4 className="text-muted">Language:</h4>
                  <Button variant="outline-light mt-2 dropdown-toggle">
                    <span className="pe-4">English</span>
                  </Button>
                </div>
                <hr />
                <div className="mt-2 pb-2">
                  <h4 className="text-muted">Maturity Settings:</h4>
                  <Button variant="dark fw-bold my-2">ALL MATURITY SETTINGS</Button>
                  <p className="text-light mt-2">Show files for all maturity settings for this profile.</p>
                  <Button variant="outline-secondary px-4">EDIT</Button>
                </div>
                <hr className="my-4" />
                <div>
                  <h4 className="text-muted">Autoplay Controls:</h4>
                  <div className="d-flex align-items-center">
                    <div className="me-2">
                      <Form.Check
                        className="bg-transparent border-white opacity-50 rounded-0"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                    <div>Autoplay next episode in a series on all devices</div>
                  </div>
                  <div className="d-flex align-items-center mt-2">
                    <div className="me-2">
                      <Form.Check
                        className="bg-transparent border-white opacity-50 rounded-0"
                        type="checkbox"
                        defaultChecked
                      />
                    </div>
                    <div>Autoplay next episode in a series on all devices</div>
                  </div>
                </div>
              </Col>
            </Row>
            <hr className="my-4" />
            <div className="action-buttons row pt-2">
              <Col>
                <Button variant="light fw-bold px-3">SAVE</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary px-3">CANCEL</Button>
              </Col>
              <Col>
                <Button variant="outline-secondary px-4">DELETE PROFILE</Button>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
