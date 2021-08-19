import React from 'react';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return(
      <>
        {this.props.beastData.map( (beast, i) => {
          return (<HornedBeast
            key={i}
            imgUrl={beast.image_url}
            title={beast.title}
            description={beast.description}
            keyword={beast.keyword}
            horns={beast.horns} />
          );
        })
        }
      </>
    );
  }
}

export default Main;
