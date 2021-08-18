import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from './data.json';

class Main extends React.Component {
  render() {
    return(
      <>
        {data.map( (beast, i) => {
          return (
            <>
              <HornedBeast key={i} imgUrl ={beast.image_url} title={beast.title} description={beast.description} keyword={beast.keyword} horns={beast.horns} />
            </>
          );
        })
        }
      </>
    );
  }
}

export default Main;
