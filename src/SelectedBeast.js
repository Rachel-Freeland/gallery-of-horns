import React from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header id="modalHeader" closeButton >
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <Card id="modalCard" style={{width: '22vw'}}>
              <Card.Img id="modalImg" variant="top" src={this.props.beast.image_url} style={{width: '20vw'}} />
              <Card.Body id="modalCardBody">
                <Card.Title><span>{this.props.beast.title}</span></Card.Title>
                <Card.Text>{this.props.beast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
          <Modal.Footer id="modalFooter">
            <p>Don't forget to VOTE for your favorite!</p>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}


export default SelectedBeast;
