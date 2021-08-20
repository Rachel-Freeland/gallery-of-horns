import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import SelectForm from './SelectForm.js';
import data from './data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      beasts: data,
      clickedBeast: {},
      horns: ''
    };
  }
  showModal = (key) => {
    this.setState({
      showModal: true,
      clickedBeast: this.state.beasts[key]
    });
  };

  closeModal = () => {
    console.log('YAY!');
    this.setState({
      showModal: false
    });
  };

  hornFilter = (value) => this.setState({ horns: Number(value)});

  filteredBeasts = () => {
    const newBeasts = data.filter( beast => beast.horns === this.state.horns );
    this.setState({
      beasts: newBeasts
    });
  }


  render() {
    return (
      <>
        <Header />
        <SelectForm hornFilter={this.hornFilter} filteredBeasts={this.filteredBeasts} />
        <SelectedBeast showModal={this.state.showModal} closeModal={this.closeModal} beast={this.state.clickedBeast} />
        <Main beastData={this.state.beasts} showModal={this.showModal} />
        <Footer />
      </>
    );
  }
}

export default App;
