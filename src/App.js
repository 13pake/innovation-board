import React, { Component } from 'react';
import './App.css';
import Main from './Main/components/Main';
import { Link } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div>
        <div className="banner bg-primary">
          <Link to="/" className="link">Innovation Board</Link>
        </div>

        <Main />

        <div className="footer">
          Clumsy Shipping © 2018 • Trevor Roberts
        </div>

      </div>
    );
  }
}

export default App;
