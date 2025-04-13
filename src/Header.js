// Header.js (mobile responsive)
import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value); 
  };

  return (
    <header
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#f9f9f9',
        boxSizing: 'border-box',
      }}
    >
      <div style={{
        fontSize: '18px',
        backgroundColor: 'rgba(225, 16, 16, 0.1)',
        padding: '8px 12px',
        borderRadius: '8px',
        marginBottom: '10px'
      }}>
        Product Store
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          display: 'flex',
          flexGrow: 1,
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
          marginBottom: '10px'
        }}
      >
        <input
          type="search"
          placeholder="Search..."
          onChange={handleInputChange}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            flex: '1 1 200px',
            minWidth: '150px'
          }}
        />
        <button type="submit" style={{
          padding: '10px 16px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: '#007bff',
          color: 'white',
          fontSize: '14px'
        }}>
          Search
        </button>
      </form>

      <div style={{ position: 'relative' }}>
        <FaShoppingCart size={30} style={{ color: 'blue' }} />
        <span style={{
          position: 'absolute',
          top: '-6px',
          right: '-10px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '4px 8px',
          fontSize: '12px'
        }}>
          {cartCount}
        </span>
      </div>
    </header>
  );
}

export default Header;