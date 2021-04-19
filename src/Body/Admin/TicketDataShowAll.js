import React, { Component, state, deleteProduct } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
//import { Route, Link } from 'react-router-dom';
import axios from 'axios';
//import UpdateNowShowing from './UpdateNowShowing';

class TicketDataShowAll extends Component {
  state = {
    ticket: [],
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
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

  deleteProduct = (tid) => {
    axios
      .delete('http://localhost:90/ticket/delete/' + tid, this.state.config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <Container>
        <div className='ticketshowall'>
          <Row>
            {this.state.ticket.map((ticket) => {
              return (
                <Col className='admin-ticket-page'>
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
                  <a href={'/ticketupdate/' + ticket._id}>Update</a>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    );
  }
}
export default TicketDataShowAll;
