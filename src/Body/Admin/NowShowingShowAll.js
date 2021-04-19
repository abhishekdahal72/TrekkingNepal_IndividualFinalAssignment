import React, { Component, state, deleteMovie } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//import { Route, Link } from 'react-router-dom';
import axios from 'axios';

class NowShowingShowAll extends Component {
  state = {
    movie: [],
    message: "",
    checkDelete: false,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/movie/fetch')
      .then((response) => {
        console.log(response);
        this.setState({
          movie: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  deleteMovie = (mid) => {
    axios.delete("http://localhost:90/movie/delete/" + mid, this.state.config)
      .then((response) => {
        console.log(response)
        this.setState({
          checkDelete: true,
          message: response.data.message
        });
      })
      .catch((err) => {
        console.log(err.response)
        this.setState({
          message: err.response.data.message
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
      <Container>
        <p>{message}</p>
        <div className='NowShowingUpdate'>
          <Row>
            {this.state.movie.map((movie) => {
              return (
                <Col md={3} sm={4} xs={12}>
                  <Card className='movie-card'>
                    <Card.Img
                      variant='top'
                      src={'http://localhost:90/images/' + movie.imagepp}
                    />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <a href={'/nowshowingupdate/' + movie._id}>Update</a>
                    </Card.Body>
                    <Button
                      className ="btn btn-danger"
                      variant='primary'
                      type='submit'
                      onClick={this.deleteMovie.bind(this,movie._id)}
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
    );
  }
}
export default NowShowingShowAll;
