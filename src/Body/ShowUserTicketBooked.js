import { Component, state, deleteTicket } from 'react';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
import axios from 'axios';


class ShowUserTicketBooked extends Component {
  state = {
    ticketbook: [],
    checkDelete: false,
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/ticketbook/fetch')
      .then((response) => {
        console.log(response);
        this.setState({
          ticketbook: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }
  deleteTicket = (title) => {
    axios
      .delete(
        'http://localhost:90/bookticket/delete/' + title,
        this.state.config
      )
      .then((response) => {
        console.log(response);
        this.setState({
          checkDelete: true,
          message: response.data.message,
        });
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({
          message: err.response.data.message,
        });
      });
  };
  render() {
    return (
      <div className='booked-ticket'>
        <Container>
          <div className='BookedTicketData'>
            <Row>
              {this.state.ticketbook.map((ticketbook) => {
                return (
                  <Col md={3} sm={4} xs={12}>
                    <Card className='movie-card'>
                      <Card.Body>
                        <Card.Title>{ticketbook.title}</Card.Title>
                        <Card.Title>{ticketbook.time}</Card.Title>
                        <Card.Title>{ticketbook.date}</Card.Title>
                      </Card.Body>
                      <Button
                        className='btn btn-danger'
                        variant='primary'
                        type='submit'
                        onClick={this.deleteTicket.bind(this, ticketbook._id)}
                      >
                        Delete
                      </Button>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
export default ShowUserTicketBooked;
