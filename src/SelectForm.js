import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SelectForm extends React.Component {

  selectHorns = (e) => {
    this.props.hornFilter(e.target.value);
  }

  onClick = (e) => {
    e.preventDefault;
    this.props.filteredBeasts();
  }

  render() {
    return(
      <Form>
        <Form.Group>
          <Form.Label>Search By Number Of Horns</Form.Label>
          <Form.Control name="numHorns" as="select" onChange={this.selectHorns}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="100">100</option>
          </Form.Control>
          <Button variant="success" onClick={this.onClick}>Search!</Button>
        </Form.Group>
      </Form>
    );
  }
}
export default SelectForm;
