import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import esewa from '../media/esewa.png';
import fonepay from '../media/fonepay.png';
import connectips from '../media/connectips.png';

class PaymentPartners extends Component {
  render() {
    return (
      <div className='Paymentpartner-section'>
        <ul className='Paymentpartner-section-ul'>
          <li>
            <p>
              Payment <br />
              Partners
            </p>
          </li>
          <li>
            <i class='fa fa-arrow-right fa-3x' aria-hidden='true'></i>
          </li>
          <li>
            <img src={esewa} alt='' />
          </li>
          <li>
            <img src={fonepay} alt='' />
          </li>
          <li>
            <img src={connectips} alt='' />
          </li>
        </ul>
      </div>
    );
  }
}
export default PaymentPartners;
