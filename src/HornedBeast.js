import React from 'react';
import Card from 'react-bootstrap/Card';
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
  };


  render() {
    return(
      <>
        <Card id="card" style={{ width: '22rem' }} onClick={this.handleClick} key={this.props.key}>
          <Card.Img id="cardImg" variant="top" src={this.props.imgUrl} alt={this.props.title} />
          <Card.Body>
            <Card.Title id="cardTitle">{this.props.title}</Card.Title>
            <Card.Text id="cardText">
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer id="cardFooter"><span>&#128150;</span>  {this.state.votes}</Card.Footer>
        </Card>
      </>
    );
  }
}

export default HornedBeast;
