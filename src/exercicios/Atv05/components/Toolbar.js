import React from 'react';

function Toolbar() {
  const handlePlay = () => {
    alert('Playing!');
  };

  const handleUpload = () => {
    alert('Uploading!');
  };

  return (
    <div>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default Toolbar;
