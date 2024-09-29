import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [dataFromChild, setDataFromChild] = useState('Initial data from child');

  const handleDataFromChild = (data) => {
    setDataFromChild(data);
  };

  return (
    <div>
      <h1>Data from Child: {dataFromChild}</h1>
      <ChildComponent data={dataFromChild} sendDataToParent={handleDataFromChild} />
    </div>
  );
}

export default ParentComponent;
