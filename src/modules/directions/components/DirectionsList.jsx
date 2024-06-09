import React from 'react';
import "../Directions.css"

const DirectionsList = ({ directions, onSelectDirection }) => {
  return (
    <div className="directions-list">
      <h2>Направления:</h2>
      {directions.map((direction) => (
        <button 
          key={direction.id} 
          className="direction-button"
          onClick={() => onSelectDirection(direction)}
        >
          {direction.name}
        </button>
      ))}
    </div>
  );
};

export default DirectionsList;
