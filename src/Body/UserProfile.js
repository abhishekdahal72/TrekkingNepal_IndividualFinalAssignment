import { Component } from 'react';
import { Row, Col, Tab, Nav} from 'react-bootstrap';
import Dashboard from './Dashboard';
import ShowUserTicketBooked from './ShowUserTicketBooked';

class UserProfile extends Component {
  render() {
      return (
        <Col className='admin'>
          <h3>User Panel</h3>
          <Tab.Container id='left-tabs-example' defaultActiveKey='user'>
            <Row className='admin-body'>
              <Col sm={3}>
                <Nav variant='pills' className='flex-column'>
                  <Nav.Item>
                    <Nav.Link eventKey='user'>Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='ticket'>User Booked Ticket</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey='user'>
                    <Dashboard />
                  </Tab.Pane>
                  <Tab.Pane eventKey='ticket'>
                    <ShowUserTicketBooked />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      );
  }
}
export default UserProfile;
