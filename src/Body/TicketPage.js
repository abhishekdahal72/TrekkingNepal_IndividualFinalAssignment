import {
  Component
} from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
//import axios from 'axios';

class TicketPage extends Component {
  
  render() {
    return (
      <Container>
        <Row>
          <Col className='ticket-page'>
            <h3>Ticket Rates:</h3>
            <div className='ticket-rate'>
              <Table
                striped
                bordered
                hover
                variant='dark'
                className='ticket-table'
              >
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
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TicketPage;
