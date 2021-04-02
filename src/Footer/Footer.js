import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import fotterlogo from '../media/footer-logo.png';
import Iframe from 'react-iframe';

class Footer extends Component {
  render() {
    return (
      <Row className='footer'>
        <hr className='navdownhrline' />
        <Col sm={4}>
          <ul className='footer-left'>
            <li>
              <img src={fotterlogo} alt='' />
            </li>
            <li>
              <p>
                The halls are equipped with cutting edge technologies like Dolby
                3 Ware Digital sound systems and digital 2K projection view.
              </p>
            </li>
            <li>
              <p className='p-social'>Follow us:</p>
            </li>
            <li>
              <ul className='footer-socialapp'>
                <li>
                  <i class='fa fa-facebook' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-twitter' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-google' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-youtube' aria-hidden='true'></i>
                </li>
                <li>
                  <i class='fa fa-instagram' aria-hidden='true'></i>
                </li>
              </ul>
            </li>
          </ul>
        </Col>
        <Col sm={1} className='footer-vl'>
          <div className='vl' />
        </Col>
        <Col sm={7} className='footer-about'>
          <Col sm={6} className='footer-link'>
            <ul className='footer-about-section'>
              <li>
                <p>
                  <i class='fa fa-map-marker' aria-hidden='true'></i>
                  &nbsp;&nbsp;Chabahil, KTM
                  <br /> 7 Saraswotinagar Road
                </p>
              </li>
              <br />
              <li className='footer-link'>
                <h5>Useful Links</h5>
                <p>About Us</p>
                <p>Contact Us</p>
                <p>Terms and Conditions</p>
                <p>Our Teams</p>
              </li>
              <li></li>
              <li></li>
            </ul>
          </Col>
          <Col sm={6} className='footer-map'>
            <div className='map'>
              <Iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8326216119685!2d85.34423901494391!3d27.72245373143507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1965c629838b%3A0xf0e803bff7382f5e!2sGopi%20Krishna%20Cinema%20Hall!5e0!3m2!1sen!2snp!4v1616569163331!5m2!1sen!2snp'
                width='300'
                height='250'
                loading='lazy'
              ></Iframe>
            </div>
          </Col>
        </Col>
      </Row>
    );
  }
}
export default Footer;
