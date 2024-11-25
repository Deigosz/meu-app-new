import React, { useState } from 'react';

function MovingDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const boundingBox = e.target.getBoundingClientRect(); // Obtém os limites da área
    const x = e.clientX - boundingBox.left;
    const y = e.clientY - boundingBox.top;

    // Restringe o movimento à área delimitada
    setPosition({
      x: Math.min(Math.max(x, 0), boundingBox.width - 10),
      y: Math.min(Math.max(y, 0), boundingBox.height - 10),
    });
  };

  return (
    <div
      className="moving-dot-container"
      onMouseMove={handleMouseMove}
    >
      <div
        style={{
          position: 'absolute',
          top: position.y,
          left: position.x,
          width: '10px',
          height: '10px',
          backgroundColor: 'red',
          borderRadius: '50%',
        }}
      ></div>
    </div>
  );
}

export default MovingDot;
