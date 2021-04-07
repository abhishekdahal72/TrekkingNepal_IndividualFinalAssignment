import { Component, state, getUserData, loginhandler } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';

class Login extends Component {
  state = {
    username: '',
    password: '',
    checklogin: false,
    message:"",
  };

  getUserData = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginhandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:90/customer/login', this.state)
      .then((response) => {
        console.log(response);
        this.setState({
          checklogin: true,
        });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userType', response.data.userType);
        localStorage.setItem('userId', response.data.customerid);
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          message: err.response.data.message,
        });
      });
  };
  render() {
    if (this.state.message) {
      var message = this.state.message;
    }

    if (this.state.checklogin === true) {
      return (window.location.href = '/');
    }
    return (
      <div>
        <div class='container'>
          <div class='row align-items-center justify-content-center login-page'>
            <div class='col-md-7'>
              <h3 class='loginpage-heading'>Login Page</h3>
              <p>{message}</p>
              <form action='#' method='post'>
                <div class='form-group first'>
                  <label for='username'>Username</label>
                  <input
                    type='text'
                    class='form-control'
                    id='username'
                    value={this.state.username}
                    onChange={(event) => {
                      this.setState({
                        username: event.target.value,
                      });
                    }}
                  />
                </div>
                <div class='form-group last mb-3'>
                  <label for='password'>Password</label>
                  <input
                    type='password'
                    class='form-control'
                    id='password'
                    value={this.state.password}
                    onChange={(event) => {
                      this.setState({
                        password: event.target.value,
                      });
                    }}
                  />
                </div>

                <div class='d-flex mb-5 align-items-center'>
                  <label class='control control--checkbox mb-0'>
                    <span class='caption'>Remember me</span>
                    <input type='checkbox' checked='checked' />
                    <div class='control__indicator'></div>
                  </label>
                  <span class='ml-auto'>
                    <a href='/' class='forgot-pass'>
                      Forgot Password
                    </a>
                  </span>
                </div>

                <span class='d-block text-center my-4 text-muted'>
                  &mdash;{' '}
                  <a href='/register'>
                    If you dont have account, Register here!!
                  </a>{' '}
                  &mdash;
                </span>

                <input
                  type='submit'
                  value='Log In'
                  class='btn btn-block btn-primary btn-login'
                  onClick={this.loginhandler}
                />

                <span class='d-block text-center my-4 text-muted'>
                  &mdash; or &mdash;
                </span>

                <div class='social-login'>
                  <a
                    href='/'
                    class='facebook btn d-flex justify-content-center align-items-center'
                  >
                    <span class='icon-facebook mr-3'></span>{' '}
                    <p>Login with Facebook</p>
                  </a>
                  <a
                    href='/'
                    class='twitter btn d-flex justify-content-center align-items-center'
                  >
                    <span class='icon-twitter mr-3'></span>{' '}
                    <p>Login with Twitter</p>
                  </a>
                  <a
                    href='/'
                    class='google btn d-flex justify-content-center align-items-center'
                  >
                    <span class='icon-google mr-3'></span>{' '}
                    <p>Login with Google</p>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
