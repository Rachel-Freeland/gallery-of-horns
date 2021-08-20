import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return(
      <CardColumns>
        {this.props.beastData.map( (beast, i) => {
          return (<HornedBeast
            key={i}
            beastkey={i}
            imgUrl={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.keyword}
            horns={beast.horns}
            showModal={this.props.showModal} />
          );
        })
        }
      </CardColumns>
    );
  }
}

export default Main;
