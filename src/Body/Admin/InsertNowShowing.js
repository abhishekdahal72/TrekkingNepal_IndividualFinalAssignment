import {
  Component,
  state,
  inputHandler,
  fileHandler,
  movieAddMethod,
} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class InsertNowShowing extends Component {
  state = {
    title: '',
    release_date: '',
    description: '',
    imagepp: '',
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  fileHandler = (e) => {
    this.setState({
      imagepp: e.target.files[0],
    });
  };

  movieAddMethod = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('imagepp', this.state.imagepp);
    data.append('title', this.state.title);
    data.append('release_date', this.state.release_date);
    data.append('description', this.state.description);

    axios
      .post('http://localhost:90/movie/insert', data, this.state.config)
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
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicReleaseDate'>
              <Form.Control
                type='date'
                placeholder='Enter Release Date'
                value={this.state.release_date}
                name='release_date'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={this.state.description}
                name='description'
                onChange={this.inputHandler}
              />
            </Form.Group>

            <Form.Group>
              <Form.File
                id='exampleFormControlFile1'
                label='Example file input'
                name='imagepp'
                onChange={this.fileHandler}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              onClick={this.movieAddMethod}
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default InsertNowShowing;
