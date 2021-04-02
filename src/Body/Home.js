import { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import MovieCarousel from './MovieCarousel';
import HomeMovieSection from './HomeMovieSection';
import PaymentPartners from './PaymentPartners';

class Home extends Component {
  render() {
    return (
      <div className='home-body carousel'>
        <MovieCarousel />
        <HomeMovieSection />
        <PaymentPartners />
      </div>
    );
  }
}
export default Home;
