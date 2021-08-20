import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import './App.css';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      votes: 0
    };
  }

  showModal = () => {
    this.props.showModal(this.props.beastkey);
  }

  handleClick = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };


  render() {
    return(
      <CardColumns id="beasts">
        <Card id="card" style={{ width: '18vw' }} beastkey={this.props.beastkey}>
          <Card.Header id="cardHeader" style={{width: '16vw'}} onClick={this.showModal}>
            <Card.Img id="cardImg" variant="top" src={this.props.imgUrl} alt={this.props.title} style={{width: '14vw'}} />
          </Card.Header>
          <Card.Body>
            <Card.Title id="cardTitle">{this.props.title}</Card.Title>
            <Card.Text id="cardText">
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer id="cardFooter"><span>&#128150;</span> &nbsp; {this.state.votes}</Card.Footer>
          <Button id="vote" variant="primary" onClick={this.handleClick}>Vote For Me!</Button>
        </Card>
      </CardColumns>
    );
  }
}

export default HornedBeast;
