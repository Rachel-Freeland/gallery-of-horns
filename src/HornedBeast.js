import React from 'react';
import './App.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      votes: 0
    };
  }

  handleClick = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  }

  render() {
    return(
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imgUrl} alt={this.props.title} onClick={this.handleClick} />
        <p>{this.props.description}</p>
        <p><span>&#128150;</span> : {this.state.votes}</p>
      </>
    );
  }
}

export default HornedBeast;
