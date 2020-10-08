import React from 'react';
import "./Card.css"
const Card = props => {
  const { jokeData } = props;
  return (
    <div>
      
      <p>
        {jokeData} 
      </p>
    </div>
  );
};

export default Card;
