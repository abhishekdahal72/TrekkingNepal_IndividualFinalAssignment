import { Component, state } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

class UserContactInfo extends Component {
  state = {
    contact: [],
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/contact/fetch')
      .then((response) => {
        console.log(response);
        this.setState({
          contact: response.data.data,
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
          {this.state.contact.map((contact) => {
            return (
              <Col>
                <Table striped bordered hover variant='dark'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>{contact.name}</td>
                      <td>{contact.email}</td>
                      <td>{contact.message}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default UserContactInfo;
