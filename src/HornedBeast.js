import React from 'react';
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
    this.props.showModal(this.props.beast.key);
  }

  handleClick = () => {
    this.setState({
      votes: this.state.votes + 1
    });
  };


  render() {
    return(
      <CardColumns id="beasts">
        <Card id="card" style={{ width: '20vw' }} onClick={this.handleClick} key={this.props.key}>
          <Card.Header id="cardHeader" style={{width: '18vw'}}>
            <Card.Img id="cardImg" variant="top" src={this.props.imgUrl} alt={this.props.title} style={{width: '16vw'}} />
          </Card.Header>
          <Card.Body>
            <Card.Title id="cardTitle">{this.props.title}</Card.Title>
            <Card.Text id="cardText">
              {this.props.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer id="cardFooter"><span>&#128150;</span>  {this.state.votes}</Card.Footer>
        </Card>
      </CardColumns>
    );
  }
}

export default HornedBeast;
