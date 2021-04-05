import {
  Component,
  state,
  changeHandler,
  updateUserData,
  fileHandler,
} from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import axios from 'axios';

class UserUpdateDetails extends Component {
  state = {
    fname: '',
    lname: '',
    username: '',
    address: '',
    phone: '',
    email: '',
    dob: '',
    imagepp: '',
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

  fileHandler = (e) => {
    this.setState({
      imagepp: e.target.files[0],
    });
  };

  componentDidMount() {
    axios
      .get('http://localhost:90/customer/single/' + this.state.id)
      .then((response) => {
        this.setState({
          fname: response.data.fname,
          lname: response.data.lname,
          username: response.data.username,
          address: response.data.address,
          phone: response.data.phone,
          email: response.data.email,
          dob: response.data.dob,
          imagepp: response.data.imagepp,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  updateUserData = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:90/customer/update', this.state, this.state.config)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <Row className='update-user-details'>
        <Col className='u-userdetails'>
          <Form className='UUDetailsForm'>
            <h4>User Details Update</h4>
            <Form.Group controlId='formBasicTitle' className='UUform'>
              <Form.Control
                type='text'
                placeholder='Enter fname'
                value={this.state.fname}
                name='fname'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicReleaseDate'>
              <Form.Control
                type='date'
                placeholder='Enter lname'
                value={this.state.lname}
                name='lname'
                onChange={this.changeHandler}
              />
            </Form.Group>

            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter username'
                value={this.state.username}
                name='username'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter address'
                value={this.state.address}
                name='address'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter phone'
                value={this.state.phone}
                name='phone'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='text'
                placeholder='Enter email'
                value={this.state.email}
                name='email'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group controlId='formBasicDescription'>
              <Form.Control
                type='date'
                placeholder='Enter dob'
                value={this.state.dob}
                name='dob'
                onChange={this.changeHandler}
              />
            </Form.Group>
            <Form.Group>
              <Form.File
                id='exampleFormControlFile1'
                name='imagepp'
                onChange={this.fileHandler}
              />
            </Form.Group>
            <Button
              variant='primary'
              type='submit'
              className='btnuserupdateform'
              onClick={this.updateUserData}
            >
              Update
            </Button>
          </Form>
        </Col>
      </Row>
    );
  }
}
export default UserUpdateDetails;
