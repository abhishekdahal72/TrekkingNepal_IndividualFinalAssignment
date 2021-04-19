import { Component, state } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

class TicketPage extends Component {
  state = {
    ticket: [],
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/ticket/webfetch')
      .then((response) => {
        console.log(response);
        this.setState({
          ticket: response.data.data,
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
          {this.state.ticket.map((ticket) => {
            return (
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
                        <td>{ticket.platinum_ticket}</td>
                        <td>{ticket.gold_ticket}</td>
                        <td>{ticket.silver_ticket}</td>
                      </tr>
                      <tr>
                        <td>Monday</td>
                        <td>{ticket.platinum_ticket}</td>
                        <td>{ticket.gold_ticket}</td>
                        <td>{ticket.silver_ticket}</td>
                      </tr>
                      <tr>
                        <td>Tuesday (30 % dis)</td>
                        <td>{ticket.dis_platinum_ticket}</td>
                        <td>{ticket.dis_gold_ticket}</td>
                        <td>{ticket.dis_silver_ticket}</td>
                      </tr>
                      <tr>
                        <td>Wednesday (30 % dis)</td>
                        <td>{ticket.dis_platinum_ticket}</td>
                        <td>{ticket.dis_gold_ticket}</td>
                        <td>{ticket.dis_silver_ticket}</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>{ticket.platinum_ticket}</td>
                        <td>{ticket.gold_ticket}</td>
                        <td>{ticket.silver_ticket}</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>{ticket.platinum_ticket}</td>
                        <td>{ticket.gold_ticket}</td>
                        <td>{ticket.silver_ticket}</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>{ticket.platinum_ticket}</td>
                        <td>{ticket.gold_ticket}</td>
                        <td>{ticket.silver_ticket}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default TicketPage;
