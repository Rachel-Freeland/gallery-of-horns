import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import HornedBeast from './HornedBeast.js';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <HornedBeast />
        <Footer />
      </div>
    );
  }
}

export default App;
