import React, { useState } from 'react';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#8B0000'); // Default background color

  const colors = [
    { name: 'Red', color: '#8B0000' },
    { name: 'Blue', color: '#1E90FF' },
    { name: 'Green', color: '#228B22' },
    { name: 'Purple', color: '#800080' },
  ];

  return (
    <div
      className="app"
      style={{
        backgroundColor: backgroundColor,
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'background-color 0.3s ease',
      }}
    >
      <h1>Background Color Change</h1>
      <div className="button-container">
        {colors.map((colorObj, index) => (
          <button
            key={index}
            className="color-button"
            style={{
              backgroundColor: backgroundColor === colorObj.color ? '#f5f5f5' : 'white',
              color: backgroundColor === colorObj.color ? '#000' : '#333',
              border: `1px solid ${colorObj.color}`,
            }}
            onClick={() => setBackgroundColor(colorObj.color)}
          >
            {colorObj.name.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
