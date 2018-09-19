import React, { Component } from 'react';
import './App.css';
import Main from './Main/components/Main';
import { Link, BrowserRouter } from 'react-router-dom';

const Navigation = () => (
  <div className="banner bg-primary">
    <Link to="/" className="link">Innovation Board</Link>
  </div>
);

const Footer = () => (
  <div className="footer">
    Clumsy Shipping © 2018 • Trevor Roberts
  </div>
);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter basename="/innovation-board">
        <div>
          <Navigation />
          <Main />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
