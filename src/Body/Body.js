import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Admin from './Admin';
import UpdateNowShowing from './Admin/UpdateNowShowing';
import SingleMovieData from './SingleMovieData';
import Dashboard from './Dashboard';
import UserUpdateDetails from './UserUpdateDetails';
import Contact from './Contact';
import UserContactInfo from './Admin/UserContactInfo';
import About from './AboutPage';
import TicketPage from './TicketPage';

class Body extends Component {
  render() {
    return (
      <div className='main-body'>
        <Col className='body'>
          <Route path='/register' exact component={Register} />
          <Route path='/' exact component={Home} />
          <Route path='/login' exact component={Login} />
          <Route path='/admin' exact component={Admin} />
          <Route
            path='/nowshowingupdate/:id'
            exact
            component={UpdateNowShowing}
          />
          <Route
            path='/nssinglemoviedata/:id'
            exact
            component={SingleMovieData}
          />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/userupdate/:id' exact component={UserUpdateDetails} />
          <Route path='/contact' exact component={Contact} />

          <Route path='/admincontactinfo' exact component={UserContactInfo} />
          <Route path='/about' exact component={About} />
          <Route path='/ticket' exact component={TicketPage} />
        </Col>
      </div>
    );
  }
}
export default Body;
