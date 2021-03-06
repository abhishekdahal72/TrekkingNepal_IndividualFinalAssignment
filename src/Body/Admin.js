import { Component } from "react";
import { Row, Col, Tab, Nav } from "react-bootstrap";
//import { Route } from 'react-router-dom';
import InsertNowShowing from "./Admin/InsertNowShowing";
import InsertTicketPrice from "./Admin/InsertTicketPrice";
import NowShowingShowAll from "./Admin/NowShowingShowAll";
import TicketDataShowAll from "./Admin/TicketDataShowAll";
import UpdateTicketPrice from "./Admin/UpdateTicketPrice";
import UserContactInfo from "./Admin/UserContactInfo";
import AdminProfile from "./AdminProfile";

class Body extends Component {
  render() {
    if (localStorage.getItem("userType") === "user") {
      return (window.location.href = "/");
    } else {
      var adminpage = (
        <Col className="admin">
          <h3>Admin Panel</h3>
          <Tab.Container id="left-tabs-example" defaultActiveKey="admin">
            <Row className="admin-body">
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="admin">Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="first">New Place insert</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">New Place update</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Insert Place Price</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Show Place Price</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fifth">User Contact-info</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="admin">
                    <AdminProfile />
                  </Tab.Pane>
                  <Tab.Pane eventKey="first">
                    <InsertNowShowing />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <NowShowingShowAll />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <InsertTicketPrice />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <TicketDataShowAll />
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <UserContactInfo />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      );
    }
    return <div>{adminpage}</div>;
  }
}
export default Body;
