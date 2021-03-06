import { Component, state, inputHandler, cusComment } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import axios from "axios";
//import num1 from '../media/endgame.jpg';

class SingleMovieData extends Component {
  state = {
    title: "",
    release_date: "",
    description: "",
    imagepp: "",
    comments: [],
    customerid: "",
    mid: "",
    id: this.props.match.params.id,
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },
  };
  componentDidMount() {
    axios
      .get("http://localhost:90/movie/single/" + this.state.id)
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
    axios
      .get("http://localhost:90/comment/" + this.state.id)
      .then((response) => {
        console.log(response);
        this.setState({
          comments: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
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
      customerid: localStorage.getItem("userId"),
      mid: this.props.match.params.id,
    };
    console.log(data);
    axios
      .post("http://localhost:90/customer/cmtinsert", data, this.state.config)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Container>
        <div className="singlemoviedata">
          <Row>
            <Col xs lg="4">
              <Card className="movie-card">
                <Card.Img
                  className="singleplaceimg"
                  variant="top"
                  src={"http://localhost:90/images/" + this.state.imagepp}
                />
                <Card.Body className="singleMCardbody">
                  <Card.Title>{this.state.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col xs lg="8" className="SMovie-Data">
              <ul>
                <li>
                  <h2>{this.state.title}</h2>
                </li>
                <li>
                  <h5 className="release-date">{this.state.release_date}</h5>
                </li>
                <li>
                  <p>{this.state.description}</p>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="user-comment">
          <Row>
            <Col className="UComment">
              <ul>
                <li>
                  <h4>What you think about the movie? Comment down here!!</h4>
                </li>
                <br />
                <li>
                  {this.state.comments.map((comment) => {
                    return (
                      <Row>
                        <Col className="comment-details">
                          <ul>
                            <li>
                              <p>{comment.customerid.fname}</p>
                            </li>
                            <li>
                              <p>{comment.comment}</p>
                            </li>
                          </ul>
                        </Col>
                      </Row>
                    );
                  })}
                </li>
                <li>
                  <Col>
                    <div className="comment-area col-lg-12">
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Control
                            type="text"
                            placeholder="Write a comment.."
                            name="comment"
                            onChange={this.inputHandler}
                          />
                        </Form.Group>
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={this.cusComment}
                        >
                          Comment
                        </Button>
                      </Form>
                    </div>
                  </Col>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
export default SingleMovieData;
