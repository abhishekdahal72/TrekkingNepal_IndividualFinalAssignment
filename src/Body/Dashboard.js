import { Component, state } from 'react';
import { Col, Container, Row, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import user from '../media/user.png';

class Dashboard extends Component {
  state = {
    user: [],
    fname: '',
    lname: '',
    username: '',
    address: '',
    phone: '',
    email: '',
    dob: '',
    imagepp: '',
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  componentDidMount() {
    axios('http://localhost:90/profile', this.state.config)
      .then((response) => {
        this.setState({
          fname: response.data.fname,
          lname: response.data.lname,
          username: response.data.username,
          email: response.data.email,
          imagepp: response.data.imagepp,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col md={4} sm={4} xs={12}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant='top' src={user} />
              <a href={'/userupdate/' + user._id}>Update your profile</a>
            </Card>
          </Col>
          <Col md={8} sm={4} xs={12}>
            <div className='user-details'>
              <ul>
                <li>
                  <p>{this.state.username}</p>
                </li>
                <li>
                  <h3>
                    {this.state.fname} {this.state.lname}
                  </h3>
                </li>
                <li>
                  <p>{this.state.email}</p>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='user-updated-details'>
            <Table striped bordered hover variant='dark'>
              {/* <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>Address</td>
                  <td>Kapan</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>9841637462</td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td>1999/06/23</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Dashboard;
