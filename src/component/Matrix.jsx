
import React, { useState } from 'react';
import './Matrix.css';

const Matrix = () => {
  const [colors, setColors] = useState([0,1,2,3,4,5,6,7,8]);

  const [clickOrder, setClickOrder] = useState([]);

  const handleClick = (index) => {
    let newColors = [...colors];
    newColors[index] = 'green';

    setColors(newColors);
    setClickOrder([...clickOrder, index]);

    if (index === 8) {
      let order = [...clickOrder, index];
      console.log(order)
      order.forEach((pos, i) => {
        setTimeout(() => {
          setColors((prevColors) => {
            let updatedColors = [...prevColors];
            console.log(updatedColors)
            updatedColors[pos] = 'orange';
            return updatedColors;
          });
        }, i * 500); 
      });
    }
  };

  return (
    <div className="matrix">
      {colors.map((value, index) => (
        <div
          key={index}
          className="box"
          style={{ backgroundColor: value }}
          onClick={() => handleClick(index)}
        ></div>
      ))}
    </div>
  );
};

export default Matrix;
