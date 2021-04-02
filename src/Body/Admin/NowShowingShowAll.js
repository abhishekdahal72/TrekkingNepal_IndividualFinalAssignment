import React, { Component, state, deleteProduct } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import axios from 'axios';
import UpdateNowShowing from './UpdateNowShowing';

class NowShowingShowAll extends Component {
  state = {
    movie: [],
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

  deleteProduct = (mid) => {
    axios
      .delete('http://localhost:90/movie/delete/' + mid, this.state.config)
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
