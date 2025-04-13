// SideBar.js (mobile responsive)
import React from 'react';

function SideBar() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '220px',
      backgroundColor: 'green',
      color: 'white',
      padding: '20px',
      borderRadius: '5px',
      margin: '10px',
      position: 'relative',
      top: '10px',
      boxSizing: 'border-box',
    }}>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        <li style={{ marginBottom: '20px', fontSize: '14px' }}>
          <button style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'white',
            color: 'green',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>FILTER BY CATEGORY</button>
        </li>
        <li style={{ marginBottom: '20px', fontSize: '14px' }}>
          <button style={{
            width: '100%',
            padding: '10px',
            backgroundColor: 'white',
            color: 'green',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold'
          }}>FILTER BY RANGE</button>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;