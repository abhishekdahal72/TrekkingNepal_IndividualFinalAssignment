import { Component, state, inputHandler, contactInsert } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Contact extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  contactInsert = (e) => {
    e.preventDefault();

    const data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(data);

    axios
      .post('http://localhost:90/contact/insert', data)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  render() {
    return (
      <Container className='contact-container'>
        <Row>
          <Col className='contact'>
            <ul>
              <li>
                <h2>Contact Us</h2>
              </li>
              <li>
                <h5>
                  Welcome to Gopi Krishna Movies. Please contact us, if you guys
                  have any queries
                </h5>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className='contact-main'>
          <Col>
            <Row>
              <Col md={2} className='contact-social'>
                <ul className='contact-social-ul'>
                  <li className='contact-socialmedia'>
                    <i class='fa fa-map-marker' aria-hidden='true' />
                  </li>
                  <li className='contact-socialmedia'>
                    <i class='fa fa-phone' aria-hidden='true' />
                  </li>
                  <li className='contact-socialmedia'>
                    <i class='fa fa-inbox' aria-hidden='true' />
                  </li>
                </ul>
              </Col>
              <Col md={10} className='contact-socialmedia-details'>
                <ul className='contact-socialmedia-details-ul'>
                  <li>
                    <h6>Address</h6>
                    <p>Chabahil, Kathmandu</p>
                    <p>46600</p>
                  </li>
                  <li className='contact-socialmedia'>
                    <h6>
                      Phone: <p>+977-9841364726</p>
                    </h6>
                  </li>
                  <li className='contact-socialmedia'>
                    <h6>
                      Email: <p>bagmati.abhi.123456@gmail.com</p>
                    </h6>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col className='contact-insert'>
            <div className='contact-topic'>
              <h3 className='contact-insert-title'>Send message</h3>
            </div>
            <div className='contact-i'>
              <Form className='contact-form'>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Control
                    type='text'
                    placeholder='Full Name'
                    value={this.state.name}
                    name='name'
                    onChange={this.inputHandler}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Control
                    type='email'
                    placeholder='Email'
                    value={this.state.email}
                    name='email'
                    onChange={this.inputHandler}
                  />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Control
                    type='text'
                    placeholder='Type Your Message'
                    value={this.state.message}
                    name='message'
                    onChange={this.inputHandler}
                  />
                </Form.Group>
                <Button
                  className='btn-contact'
                  variant='primary'
                  type='submit'
                  onClick={this.contactInsert}
                >
                  Send
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Contact;
