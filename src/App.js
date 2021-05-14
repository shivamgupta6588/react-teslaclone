//import logo from './logo.svg';
import './App.css';
import { Navbar ,NavbarBrand } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
    <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
    </Navbar>
    </div>
  );
}

export default App;
