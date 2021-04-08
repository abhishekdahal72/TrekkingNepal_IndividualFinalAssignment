import { Component, state } from 'react';
import { Col, Container, Row, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import userprofile from '../media/user.png';

class AdminProfile extends Component {
  state = {
    id: localStorage.getItem('userId'),
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
          phone: response.data.phone,
          address: response.data.address,
          dob: response.data.dob,
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
              <Card.Img variant='top' src={userprofile} />
              <a href={'/userupdate/' + this.state.id}>Update your profile</a>
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
                  <td>{this.state.username}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>{this.state.phone}</td>
                </tr>
                <tr>
                  <td>Date of birth</td>
                  <td>{this.state.dob}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default AdminProfile;
