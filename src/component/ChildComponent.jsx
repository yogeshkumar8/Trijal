import React from 'react';

function ChildComponent({ data, sendDataToParent }) {
  const handleClick = () => {
    const updatedData = 'Updated data from Child!';
    sendDataToParent(updatedData);
  };

  return (
    <div>
      <p>{data}</p>
      <button onClick={handleClick}>Send Updated Data to Parent</button>
    </div>
  );
}

export default ChildComponent;
