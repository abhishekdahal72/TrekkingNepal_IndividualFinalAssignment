import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import {BrowserRouter} from 'react-router-dom'
import Header from './Header/Header'
import Body from './Body/Body'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Body></Body>
      </div>
    </BrowserRouter>
  );
}

export default App;
