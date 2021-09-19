import { Component, state, sendUserData } from 'react';
import axios from 'axios';
import Register_Logo from '../media/footer-logo.png';

class Register extends Component {
  state = {
    fname: '',
    lname: '',
    username: '',
    email: '',
    password: '',
  };

  sendUserData = (e) => {
    e.preventDefault();
    const data = {
      fname: this.state.fname,
      lname: this.state.lname,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(data);
    axios
      .post('http://localhost:90/customer/register', data)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        {/* <form onSubmit={this.sendUserData}></form> */}

        {/* Sign up form */}
        <section class='signup'>
          <div class='container'>
            <div class='signup-content'>
              <div class='signup-form'>
                <h2 class='form-title'>Sign up</h2>
                <form
                  method='POST'
                  class='register-form'
                  id='register-form'
                  onSubmit={this.sendUserData}
                >
                  <div className='name'>
                    <div className='fname'>
                      <div class='form-group'>
                        <label for='fname'>
                          <i class='zmdi zmdi-account material-icons-name'></i>
                        </label>
                        <input
                          type='text'
                          name='fname'
                          id='fname'
                          placeholder='Your First Name'
                          value={this.state.fname}
                          onChange={(event) => {
                            this.setState({ fname: event.target.value });
                          }}
                        />
                      </div>
                    </div>
                    <div className='lname'>
                      <div class='form-group'>
                        <label for='lname'>
                          <i class='zmdi zmdi-account material-icons-name'></i>
                        </label>
                        <input
                          type='text'
                          name='lname'
                          id='lname'
                          placeholder='Your Last Name'
                          value={this.state.lname}
                          onChange={(event) => {
                            this.setState({ lname: event.target.value });
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div class='form-group'>
                    <label for='username'>
                      <i class='zmdi zmdi-username'></i>
                    </label>
                    <input
                      type='text'
                      name='username'
                      id='username'
                      placeholder='Your Username'
                      value={this.state.username}
                      onChange={(event) => {
                        this.setState({ username: event.target.value });
                      }}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='email'>
                      <i class='zmdi zmdi-email'></i>
                    </label>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      placeholder='Your Email'
                      value={this.state.email}
                      onChange={(event) => {
                        this.setState({ email: event.target.value });
                      }}
                    />
                  </div>
                  <div class='form-group'>
                    <label for='pass'>
                      <i class='zmdi zmdi-lock-outline'></i>
                    </label>
                    <input
                      type='password'
                      name='pass'
                      id='pass'
                      placeholder='Password'
                      value={this.state.password}
                      onChange={(event) => {
                        this.setState({ password: event.target.value });
                      }}
                    />
                  </div>
                  <div class='form-group'>
                    <input
                      type='checkbox'
                      name='agree-term'
                      id='agree-term'
                      class='agree-term'
                    />
                    <label for='agree-term' class='label-agree-term'>
                      <span>
                        <span></span>
                      </span>
                      I agree all statements in &nbsp;
                      <a href='/' class='term-service'>
                        Terms of service
                      </a>
                    </label>
                  </div>
                  <div class='form-group form-button'>
                    <input
                      type='submit'
                      name='signup'
                      id='signup'
                      class='form-submit'
                      value='Register'
                    />
                  </div>
                </form>
              </div>
              <div class='signup-image'>
                <figure>
                  <img src={Register_Logo} alt='logo' />
                </figure>
                <a href='/login' class='signup-image-link'>
                  I am already member
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Register;
