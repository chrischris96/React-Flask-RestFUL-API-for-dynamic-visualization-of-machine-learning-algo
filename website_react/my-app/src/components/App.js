import React from 'react';
// import logo from '../styles/logo.svg';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Header from './topappbar'
import Cards from './cards'
import 'mapbox-gl/dist/mapbox-gl.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = { color: "red" };
  }

  render() {
    return(
      <Container>
        <Header/>
        <Cards/> 
      </Container>
      
    );
  }
}

export default App