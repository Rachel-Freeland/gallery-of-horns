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
        <Modal show={this.props.showModal} onHide={this.props.onClose}>
          <Modal.Header id="modalHeader" closeButton>
            <Modal.Title>{this.props.beast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalBody">
            <Card style={{width: '35vw'}}>
              <Card.Img variant="top" src={this.props.beast.imgUrl} />
              <Card.Body id="modalCardBody">
                <Card.Title>{this.props.beast.title}</Card.Title>
                <Card.Text>{this.props.beast.description}</Card.Text>
              </Card.Body>
            </Card>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}


export default SelectedBeast;
