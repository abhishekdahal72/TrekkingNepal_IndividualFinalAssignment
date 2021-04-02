// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component, logout } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import Logo from '../media/logo.png';
// import Sicon from '../media/select - icon.png';
import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    window.location.href = '/';
  };
  render() {
    if (
      localStorage.getItem('token') &&
      localStorage.getItem('userType') === 'admin'
    ) {
      var nav = (
        <div className='container-fluid'>
          {/* <Col>
                      <a href="/">Home</a>
                      <a href= "/register">Register</a>
                      <a href= "/about">About</a>
                      <a href= "/login">Login</a>
                  </Col> */}
          {/* -------- top header------- */}
          <div className='header'>
            {/* <!-- header phone --> */}
            <Col>
              <div class='header-left'>
                <p>
                  <i class='fa fa-phone'></i> +977-9813714762
                </p>
              </div>
            </Col>
            {/* <!-- header phone end--> */}

            {/* <!-- header social media --> */}
            <Col className='header-right'>
              <Row className='rightheader-row'>
                <Col>
                  <Form inline>
                    <FormControl
                      type='text'
                      placeholder='Search'
                      className='mr-sm-2 srch'
                    />
                    <Button variant='outline-success'>
                      <i>
                        <i class='fa fa-search'></i>
                      </i>
                    </Button>
                  </Form>
                </Col>
                <Col md='auto' className='userlogin'>
                  <a href='/login'>Login</a>
                </Col>
                <Col xs lg='3'>
                  <div className='social-media'>
                    <ul>
                      <li>
                        <a href='/' className='fb'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a href='/' className='insta'>
                          <i class='fa fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href='/' className='tweet'>
                          <i class='fa fa-twitter'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <!-- header social media end --> */}
          </div>
          <hr className='navdownhrline' />
          {/*--------- top header ends-------- */}
          {/*------------- nav bar-------------- */}
          <div className='nav'>
            <div className='col-md-3'>
              <div className='logo'>
                <img src={Logo} alt='logo' />
              </div>
            </div>
            <div className='col-md-9'>
              <nav class='navbar navbar-expand-lg'>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>
                <ul class='navbar-nav collapse navbar-collapse' id='navbarNav'>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/'>
                      Home
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/ticketrates'>
                      Ticket Rates
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='/about'>
                      About
                    </a>
                  </li>
                  <li class='nav-item right'>
                    <a class='nav-link' href='/contact'>
                      Contact Us
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/admin'>
                      Admin
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      onClick={this.logout}
                      aria-current='page'
                      href='/'
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <hr className='navdownhrline' /> */}
        </div>
      );
    } else if (
      localStorage.getItem('token') &&
      localStorage.getItem('userType') === 'user'
    ) {
      var nav = (
        <div className='container-fluid'>
          {/* <Col>
                      <a href="/">Home</a>
                      <a href= "/register">Register</a>
                      <a href= "/about">About</a>
                      <a href= "/login">Login</a>
                  </Col> */}
          {/* -------- top header------- */}
          <div className='header'>
            {/* <!-- header phone --> */}
            <Col>
              <div class='header-left'>
                <p>
                  <i class='fa fa-phone'></i> +977-9813714762
                </p>
              </div>
            </Col>
            {/* <!-- header phone end--> */}

            {/* <!-- header social media --> */}
            <Col className='header-right'>
              <Row className='rightheader-row'>
                <Col>
                  <Form inline>
                    <FormControl
                      type='text'
                      placeholder='Search'
                      className='mr-sm-2 srch'
                    />
                    <Button variant='outline-success'>
                      <i>
                        <i class='fa fa-search'></i>
                      </i>
                    </Button>
                  </Form>
                </Col>
                <Col md='auto' className='userlogin'>
                  <a href='/login'>Login</a>
                </Col>
                <Col xs lg='3'>
                  <div className='social-media'>
                    <ul>
                      <li>
                        <a href='/' className='fb'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a href='/' className='insta'>
                          <i class='fa fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href='/' className='tweet'>
                          <i class='fa fa-twitter'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <!-- header social media end --> */}
          </div>
          <hr className='navdownhrline' />
          {/*--------- top header ends-------- */}
          {/*------------- nav bar-------------- */}
          <div className='nav'>
            <div className='col-md-3'>
              <div className='logo'>
                <img src={Logo} alt='logo' />
              </div>
            </div>
            <div className='col-md-9'>
              <nav class='navbar navbar-expand-lg'>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>
                <ul class='navbar-nav collapse navbar-collapse' id='navbarNav'>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/'>
                      Home
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/ticketrates'>
                      Ticket Rates
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='/about'>
                      About
                    </a>
                  </li>
                  <li class='nav-item right'>
                    <a class='nav-link' href='/contact'>
                      Contact Us
                    </a>
                  </li>
                  <li class='nav-item right'>
                    <a class='nav-link' href='/dashboard'>
                      Dashboard
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a
                      class='nav-link'
                      onClick={this.logout}
                      aria-current='page'
                      href='/'
                    >
                      Logout
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <hr className='navdownhrline' /> */}
        </div>
      );
    } else {
      var nav = (
        <div className='container-fluid'>
          {/* <Col>
                      <a href="/">Home</a>
                      <a href= "/register">Register</a>
                      <a href= "/about">About</a>
                      <a href= "/login">Login</a>
                  </Col> */}
          {/* -------- top header------- */}
          <div className='header'>
            {/* <!-- header phone --> */}
            <Col>
              <div class='header-left'>
                <p>
                  <i class='fa fa-phone'></i> +977-9813714762
                </p>
              </div>
            </Col>
            {/* <!-- header phone end--> */}

            {/* <!-- header social media --> */}
            <Col className='header-right'>
              <Row className='rightheader-row'>
                <Col>
                  <Form inline>
                    <FormControl
                      type='text'
                      placeholder='Search'
                      className='mr-sm-2 srch'
                    />
                    <Button variant='outline-success'>
                      <i>
                        <i class='fa fa-search'></i>
                      </i>
                    </Button>
                  </Form>
                </Col>
                <Col md='auto' className='userlogin'>
                  <a href='/login'>Login</a>
                </Col>
                <Col xs lg='3'>
                  <div className='social-media'>
                    <ul>
                      <li>
                        <a href='/' className='fb'>
                          <i className='fa fa-facebook' />
                        </a>
                      </li>
                      <li>
                        <a href='/' className='insta'>
                          <i class='fa fa-instagram'></i>
                        </a>
                      </li>
                      <li>
                        <a href='/' className='tweet'>
                          <i class='fa fa-twitter'></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
            {/* <!-- header social media end --> */}
          </div>
          <hr className='navdownhrline' />
          {/*--------- top header ends-------- */}
          {/*------------- nav bar-------------- */}
          <div className='nav'>
            <div className='col-md-3'>
              <div className='logo'>
                <img src={Logo} alt='logo' />
              </div>
            </div>
            <div className='col-md-9'>
              <nav class='navbar navbar-expand-lg'>
                <button
                  class='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarNav'
                  aria-controls='navbarNav'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span class='navbar-toggler-icon'></span>
                </button>
                <ul class='navbar-nav collapse navbar-collapse' id='navbarNav'>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/'>
                      Home
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' aria-current='page' href='/ticketrates'>
                      Ticket Rates
                    </a>
                  </li>
                  <li class='nav-item'>
                    <a class='nav-link' href='/about'>
                      About
                    </a>
                  </li>
                  <li class='nav-item right'>
                    <a class='nav-link' href='/contact'>
                      Contact Us
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* <hr className='navdownhrline' /> */}
        </div>
      );
    }
    return (
      <div>{nav}</div>
      // <div className='container-fluid'>
      //   {/* <Col>
      //               <a href="/">Home</a>
      //               <a href= "/register">Register</a>
      //               <a href= "/about">About</a>
      //               <a href= "/login">Login</a>
      //           </Col> */}
      //   {/* -------- top header------- */}
      //   <div className='header'>
      //     {/* <!-- header phone --> */}
      //     <Col>
      //       <div class='header-left'>
      //         <p>
      //           <i class='fa fa-phone'></i> +977-9813714762
      //         </p>
      //       </div>
      //     </Col>
      //     {/* <!-- header phone end--> */}

      //     {/* <!-- header social media --> */}
      //     <Col className='header-right'>
      //       <Row className='rightheader-row'>
      //         <Col>
      //           <Form inline>
      //             <FormControl
      //               type='text'
      //               placeholder='Search'
      //               className='mr-sm-2 srch'
      //             />
      //             <Button variant='outline-success'>
      //               <i>
      //                 <i class='fa fa-search'></i>
      //               </i>
      //             </Button>
      //           </Form>
      //         </Col>
      //         <Col md='auto' className='userlogin'>
      //           <a href='/login'>Login</a>
      //         </Col>
      //         <Col xs lg='3'>
      //           <div className='social-media'>
      //             <ul>
      //               <li>
      //                 <a href='/' className='fb'>
      //                   <i className='fa fa-facebook' />
      //                 </a>
      //               </li>
      //               <li>
      //                 <a href='/' className='insta'>
      //                   <i class='fa fa-instagram'></i>
      //                 </a>
      //               </li>
      //               <li>
      //                 <a href='/' className='tweet'>
      //                   <i class='fa fa-twitter'></i>
      //                 </a>
      //               </li>
      //             </ul>
      //           </div>
      //         </Col>
      //       </Row>
      //     </Col>
      //     {/* <!-- header social media end --> */}
      //   </div>
      //   <hr className='navdownhrline' />
      //   {/*--------- top header ends-------- */}
      //   {/*------------- nav bar-------------- */}
      //   <div className='nav'>
      //     <div className='col-md-3'>
      //       <div className='logo'>
      //         <img src={Logo} alt='logo' />
      //       </div>
      //     </div>
      //     <div className='col-md-9'>
      //       <nav class='navbar navbar-expand-lg'>
      //         <button
      //           class='navbar-toggler'
      //           type='button'
      //           data-bs-toggle='collapse'
      //           data-bs-target='#navbarNav'
      //           aria-controls='navbarNav'
      //           aria-expanded='false'
      //           aria-label='Toggle navigation'
      //         >
      //           <span class='navbar-toggler-icon'></span>
      //         </button>
      //         <ul class='navbar-nav collapse navbar-collapse' id='navbarNav'>
      //           <li class='nav-item'>
      //             <a class='nav-link' aria-current='page' href='/'>
      //               Home
      //             </a>
      //           </li>
      //           <li class='nav-item'>
      //             <a class='nav-link' aria-current='page' href='/ticketrates'>
      //               Ticket Rates
      //             </a>
      //           </li>
      //           <li class='nav-item'>
      //             <a class='nav-link' href='/about'>
      //               About
      //             </a>
      //           </li>
      //           <li class='nav-item right'>
      //             <a class='nav-link' href='/register'>
      //               Contact Us
      //             </a>
      //           </li>
      //           <li class='nav-item'>
      //             <a class='nav-link' aria-current='page' href='/admin'>
      //               Admin
      //             </a>
      //           </li>
      //         </ul>
      //       </nav>
      //     </div>
      //   </div>
      //   {/* <hr className='navdownhrline' /> */}
      // </div>
    );
  }
}
export default Header;
