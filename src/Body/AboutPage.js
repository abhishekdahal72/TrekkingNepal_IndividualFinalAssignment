import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import hall from "../media/hall.jpg";
import hall2 from "../media/hall2.jpg";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about-title col-lg-12">
          <h3>About Us</h3>
        </div>
        <div className="about-hall col-lg-12">
          <img className="about-hall" href="/" src={hall} alt="hall" />
        </div>

        <div className="about-description col-lg-12">
          <div class="row align-items-start">
            <div class="col about-desc">
              <p>
                The Federal Democratic Republic of Nepal (Nepali: /n until the
                end of its history) Nepal, [nepal] is a landlocked nation of
                South Asia, and the Federal Democratic Republic of Nepal
                (Nepali, /Nepali: [nepal]: It is mostly located in the
                Himalayas, but also contains sections of the Indo-Gangetic Plain
                bordering on the North Tibet and on the South East and West
                India, while the Siliguri Corridor is closely divided from
                Bangladesh and the Indian state of Sikkim from Bhutan. Nepal has
                a diversified geographical position, comprising fertile plains,
                subalpine forest slopes and eight of the top ten in the world,
                including Mount Everest.
              </p>
            </div>
            <div class="col about-hall2">
              <img className="about-hall" href="/" src={hall2} alt="hall2" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
