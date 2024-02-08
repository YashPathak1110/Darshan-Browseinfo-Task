import React from 'react';
import RemoveDuplicates from './components/RemoveDuplicates';
function App() {
  return (
    <div className='div' style={{ marginTop: "13rem", fontSize: "40px", textShadow: "2.7px 2.7px 2.7px white"}}>
      <h1 style={{marginLeft: "15rem"}}>Remove Duplicates Example</h1>
      <RemoveDuplicates />
    </div>
  );
}

export default App;