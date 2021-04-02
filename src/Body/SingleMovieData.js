import { Component, state, inputHandler, cusComment } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import num1 from '../media/endgame.jpg';

class SingleMovieData extends Component {
  state = {
    title: '',
    release_date: '',
    description: '',
    imagepp: '',
    comment: '',
    customerid: '',
    mid: '',
    id: this.props.match.params.id,
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/movie/single/' + this.state.id)
      .then((response) => {
        console.log(response.data);
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

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  cusComment = (e) => {
    e.preventDefault();

    const data = {
      comment: this.state.comment,
      customerid: localStorage.getItem('userId'),
      mid: this.props.match.params.id,
    };
    console.log(data);
    axios
      .post('http://localhost:90/customer/cmtinsert', data)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <div className='singlemoviedata'>
          <Row>
            <Col md={3} sm={4} xs={12}>
              <Card className='movie-card'>
                <Card.Img
                  variant='top'
                  src={'http://localhost:90/images/' + this.state.imagepp}
                />
                <Card.Body className='singleMCardbody'>
                  <Card.Title>{this.state.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col md={9} sm={4} xs={12} className='SMovie-Data'>
              <ul>
                <li>
                  <h2>{this.state.title}</h2>
                </li>
                <li>
                  <h5 className='release-date'>{this.state.release_date}</h5>
                </li>
                <li>
                  <p>{this.state.description}</p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className='user-comment'>
          <Row>
            <Col className='UComment'>
              <h4>What you think about the movie? Comment down here!!</h4>

              <Col className='UComment-details'>
                <div className='Ucomment-head'>
                  <img src={num1} alt='' />
                  <p>Abhishek Dahal</p>
                </div>
                <div className='commented-area'>
                  <p>
                    Avengers: Endgame's cinematic release ran a whopping 182
                    minutes - three hours and two minutes. The rerelease with
                    extra footage is 188 minutes, or three hours and eight
                    minutes. Please upload extended version... please{' '}
                  </p>
                </div>
                <div className='comment-area col-lg-12'>
                  <Form>
                    <Form.Group controlId='formBasicEmail'>
                      <Form.Control
                        type='text'
                        placeholder='Write a comment..'
                        name='comment'
                        onChange={this.inputHandler}
                      />
                    </Form.Group>
                    <Button
                      variant='primary'
                      type='submit'
                      onClick={this.cusComment}
                    >
                      Comment
                    </Button>
                  </Form>
                </div>
              </Col>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default SingleMovieData;
