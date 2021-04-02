import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import hall from '../media/hall.jpg';
import hall2 from '../media/hall2.jpg';

class About extends Component {
  render() {
    return (
      <div className='about'>
        <div className='about-title col-lg-12'>
          <h3>About Us</h3>
        </div>
        <div className='about-hall col-lg-12'>
          <img className='about-hall' href='/' src={hall} alt='hall' />
        </div>

        <div className='about-description col-lg-12'>
          <div class='row align-items-start'>
            <div class='col about-desc'>
              <p>
                The halls are equipped with cutting edge technologies like Dolby
                3 Ware Digital sound systems and digital 2K projection view.
                Considered to be one of the most sophisticated and advanced
                equipment, these will bring forth the best picture and sound
                quality for the audience to enjoy. The super comfy seats and
                modern decor adds a luxurious touch to this high-tech movie
                theater.
              </p>
              <p>
                No movie experience is complete without refreshment and at Gopi
                Krishna Cinemas this need is also taken care of with its snack
                corner. Rest assured that watching movies at Gopi Krishna
                Cinemas will be an audio-visual treat for the audience, which
                you can enjoy in a relaxed ambiance.
              </p>
            </div>
            <div class='col about-hall2'>
              <img className='about-hall' href='/' src={hall2} alt='hall2' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
