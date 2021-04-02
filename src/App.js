import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header/Header';
import Body from './Body/Body';
import './css/style.css';
import Footer from './Footer/Footer';
// import 'font-awesome/css/font-awesome.min.css';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
// library.add(faFacebookF);

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Body />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
