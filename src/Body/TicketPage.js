import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
      <Container className=''>
        <Row>
          <Col>
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>Weeks</th>
                  <th>Platinum Ticket</th>
                  <th>Gold Ticket</th>
                  <th>Silver Ticket</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sunday</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Monday</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Tuesday (30 % dis)</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Wednesday (30 % dis)</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>550</td>
                  <td>450</td>
                  <td>350</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Home;
