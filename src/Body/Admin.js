import { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import InsertNowShowing from './Admin/InsertNowShowing';
import NowShowingShowAll from './Admin/NowShowingShowAll';
import UpdateNowShowing from './Admin/UpdateNowShowing';
import UserContactInfo from './Admin/UserContactInfo';

class Body extends Component {
  render() {
    if (localStorage.getItem('userType') === 'user') {
      return (window.location.href = '/');
    } else {
      var adminpage = (
        <Col className='admin'>
          <h3>Admin Panel</h3>
          <Tab.Container id='left-tabs-example' defaultActiveKey='admin'>
            <Row className='admin-body'>
              <Col sm={3}>
                <Nav variant='pills' className='flex-column'>
                  <Nav.Item>
                    <Nav.Link eventKey='admin'>Dashboard</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='first'>Now showing insert</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>Now showing update</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='third'>User Contact-info</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey='admin'>admin</Tab.Pane>
                  <Tab.Pane eventKey='first'>
                    <InsertNowShowing />
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <NowShowingShowAll />
                  </Tab.Pane>
                  <Tab.Pane eventKey='third'>
                    <UserContactInfo />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      );
    }
    return {
      adminpage,
    };
  }
}
export default Body;
