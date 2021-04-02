import { Component, state } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import num1 from '../media/endgame.jpg';
import num2 from '../media/doctor-strange.jpg';
import num3 from '../media/download.jpg';
import num4 from '../media/rrr.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class NextChange extends Component {
  state = {
    movie: [],
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
  render() {
    return (
      <div className='home-nextchange'>
        <Row>
          {this.state.movie.map((movie) => {
            return (
              <Col md={3} sm={4} xs={12}>
                <Card>
                  <Card.Img
                    variant='top'
                    src={'http://localhost:90/images/' + movie.imagepp}
                  />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Button variant='primary'>Book Ticket</Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
export default NextChange;
