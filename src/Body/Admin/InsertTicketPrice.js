import { Component, state, inputHandler, addtpMethod } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class InsertTicketPrice extends Component {
  state = {
    platinum_ticket: '',
    gold_ticket: '',
    silver_ticket: '',
    dis_platinum_ticket: '',
    dis_gold_ticket: '',
    dis_silver_ticket: '',
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addtpMethod = (e) => {
    e.preventDefault();

    const data = {
      platinum_ticket: this.state.platinum_ticket,
      gold_ticket: this.state.gold_ticket,
      silver_ticket: this.state.silver_ticket,
      dis_platinum_ticket: this.state.dis_platinum_ticket,
      dis_gold_ticket: this.state.dis_gold_ticket,
      dis_silver_ticket: this.state.dis_silver_ticket,
    };
    console.log(data);

    axios
      .post('http://localhost:90/ticket/insert', data, this.state.config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <Row className='insert-ticket'>
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

            <Button variant='primary' type='submit' onClick={this.addtpMethod}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default InsertTicketPrice;
