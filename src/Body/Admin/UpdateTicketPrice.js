import { Component, state, inputHandler, updatetpMethod } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class UpdateTicketPrice extends Component {
  state = {
    platinum_ticket: '',
    gold_ticket: '',
    silver_ticket: '',
    dis_platinum_ticket: '',
    dis_gold_ticket: '',
    dis_silver_ticket: '',
    checkupdate: false,
    message: '',
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/ticket/single/' + this.state.id)
      .then((response) => {
        this.setState({
          platinum_ticket: response.data.platinum_ticket,
          gold_ticket: response.data.gold_ticket,
          silver_ticket: response.data.silver_ticket,
          dis_platinum_ticket: response.data.dis_platinum_ticket,
          dis_gold_ticket: response.data.dis_gold_ticket,
          dis_silver_ticket: response.data.dis_silver_ticket,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  updatetpMethod = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:90/ticket/update', this.state, this.state.config)
      .then((response) => {
        console.log(response);
        this.setState({
          checkupdate: true,
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
    if (this.state.message) {
      var message = this.state.message;
    }

    if (this.state.checkupdate === true) {
      return (window.location.href = '/ticketshowall');
    }
    return (
      <Row className='insert-ticket'>
        <p>{message}</p>
        <Col className='i-ticket'>
          <Form className='form-ticket'>
            <Form.Group controlId='formBasicTitle'>
              <Form.Control
                type='text'
                placeholder='Enter platinum ticket price'
                value={this.state.platinum_ticket}
                name='platinum_ticket'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicReleaseDate'>
              <Form.Control
                type='text'
                placeholder='Enter gold ticket price'
                value={this.state.gold_ticket}
                name='gold_ticket'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter silver ticket price'
                value={this.state.silver_ticket}
                name='silver_ticket'
                onChange={this.inputHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter discount platinum ticket price'
                value={this.state.dis_platinum_ticket}
                name='dis_platinum_ticket'
                onChange={this.inputHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter discount gold ticket price'
                value={this.state.dis_gold_ticket}
                name='dis_gold_ticket'
                onChange={this.inputHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter discount silver ticket price'
                value={this.state.dis_silver_ticket}
                name='dis_silver_ticket'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Button variant='primary' type='submit' onClick={this.updatetpMethod}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default UpdateTicketPrice;
