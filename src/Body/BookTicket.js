import { Component, state, inputHandler, ticketBook } from 'react';
import axios from 'axios';

class BookTicket extends Component {
  state = {
    title: '',
    release_date: '',
    description: '',
    imagepp: '',
    id: this.props.match.params.id,
    moviename: '',
    mid: '',
    date: '',
    time: '',
    username: '',
    uid: localStorage.getItem('uid'),
    config: {
      headers: { authorization: `Bearer ${localStorage.getItem('token')}` },
    },
  };
  componentDidMount() {
    axios
      .get('http://localhost:90/movie/single/' + this.state.id)
      .then((response) => {
        console.log(response.data);
        this.setState({
          title: response.data.title,
          release_date: response.data.release_date,
          description: response.data.description,
          imagepp: response.data.imagepp,
        });
        console.log(this.props.match.params.id);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  ticketBook = (e) => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      date: this.state.date,
      time: this.state.time,
      title: this.state.title,
      uid: localStorage.getItem('userId'),
      mid: this.props.match.params.id,
    };
    console.log(data);
    axios
      .post('http://localhost:90/ticketbook', data, this.state.config)
      .then()
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    const options = ['06 am', '07 am', '08 am', '09 am', '10 am'];

    return (
      <div>
        <section id="portfolio-details" class="portfolio-details single-detail">
          <div class="container">
            <div
              class="portfolio-details-container"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="movie-info">
                <ul>
                  <li>
                    <strong>Title</strong>: <p>{this.state.title}</p>
                  </li>
                  <li>
                    <strong>Date</strong>: {this.state.release_date}
                  </li>
                  <li>
                    <img
                      src={"http://localhost:90/images/" + this.state.imagepp}
                      class="img-fluid singleplaceimg"
                      alt=""
                    />
                  </li>
                  <li>
                    <strong>
                      Price: Platinum: 500, Gold: 400, Silver: 300
                    </strong>
                  </li>
                </ul>
              </div>
            </div>

            <div class="movie-description">
              <h2>Description of</h2>
              <p>{this.state.description}</p>
            </div>
          </div>
        </section>

        <div class="container">
          <div class="row py-5 mt-4 align-items-center">
            <div class="col-md-12 pr-lg-5 mb-5 mb-md-0 ticketbook-title">
              <h1>Book: {this.state.title}</h1>
              <br />
            </div>
            <div class="col-md-12 col-lg-12 ml-auto">
              <div class="row">
                <div class="input-group col-lg-4 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="bx bx-current-location text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.inputHandler}
                    required
                    placeholder="Username"
                    class="form-control bg-white border-left-0 border-md"
                    style={{ height: "100%" }}
                  />
                </div>

                <div class="input-group col-lg-4 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="bx bx-current-location text-muted"></i>
                    </span>
                  </div>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    onChange={this.inputHandler}
                    value={this.state.date}
                    required
                    placeholder="Date"
                    class="form-control bg-white border-left-0 border-md"
                    style={{ height: "100%" }}
                  />
                </div>

                <div class="input-group col-lg-4 mb-4">
                  <div class="input-group-prepend">
                    <span class="input-group-text bg-white px-4 border-md border-right-0">
                      <i class="bx bxs-phone text-muted"></i>
                    </span>
                  </div>
                  <select
                    id="time"
                    name="time"
                    onChange={this.inputHandler}
                    value={this.state.time}
                    class="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                  >
                    <option>Please select a time</option>
                    <option value={options[0]}>{options[0]}</option>
                    <option value={options[1]}>{options[1]}</option>
                    <option value={options[2]}>{options[2]}</option>
                    <option value={options[2]}>{options[3]}</option>
                    <option value={options[2]}>{options[4]}</option>
                  </select>
                  {/* <Dropdown options={options} name="time" onChange={this._onSelect} value={this.state.time} placeholder="Select a time" /> */}
                </div>

                <div class="form-group col-lg-4 mx-auto mb-0">
                  <button
                    className="btn btn-lg btn-primary btn-block mb-2 text-uppercase"
                    type="submit"
                    onClick={this.ticketBook}
                  >
                    Book Ticket
                  </button>
                  <form
                    action="https://uat.esewa.com.np/epay/main"
                    method="POST"
                  >
                    <input value="350" name="tAmt" type="hidden" />
                    <input value="250" name="amt" type="hidden" />
                    <input value="50" name="txAmt" type="hidden" />
                    <input value="30" name="psc" type="hidden" />
                    <input value="20" name="pdc" type="hidden" />
                    <input value="EPAYTEST" name="scd" type="hidden" />
                    <input
                      value="ee2c3ca1-696b-4cc5-a6be-2c40d929d453"
                      name="pid"
                      type="hidden"
                    />
                    <input
                      value="http://merchant.com.np/page/esewa_payment_success?q=su"
                      type="hidden"
                      name="su"
                    />
                    <input
                      value="http://merchant.com.np/page/esewa_payment_failed?q=fu"
                      type="hidden"
                      name="fu"
                    />
                    <input
                      value="Pay Now"
                      type="submit"
                      className="btn btn-lg btn-primary btn-block text-uppercase"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BookTicket;
