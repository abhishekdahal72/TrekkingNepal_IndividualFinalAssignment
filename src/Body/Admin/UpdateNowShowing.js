import { Component, state, changeHandler, updateData } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class UpdateNowShowing extends Component {
  state = {
    title: '',
    release_date: '',
    description: '',
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/movie/single/' + this.state.id)
      .then((response) => {
        this.setState({
          title: response.data.title,
          release_date: response.data.release_date,
          description: response.data.description,
          imagepp: response.data.imagepp,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  updateData = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:90/movie/update', this.state, this.state.config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <Row className='insert-nowshowing'>
        <Col className='i-nowshowing'>
          <Form>
            <Form.Group controlId='formBasicTitle'>
              <Form.Control
                type='text'
                placeholder='Enter title'
                value={this.state.title}
                name='title'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicReleaseDate'>
              <Form.Control
                type='date'
                placeholder='Enter Release Date'
                value={this.state.release_date}
                name='release_date'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={this.state.description}
                name='description'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Button variant='primary' type='submit' onClick={this.updateData}>
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default UpdateNowShowing;
