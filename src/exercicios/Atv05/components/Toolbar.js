import React from 'react';

function Toolbar({ onPlay, onUpload }) {
  return (
    <div>
      <button onClick={onPlay}>Play</button>
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}

export default Toolbar;
