import './App.css';
import React from "react";
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, onSearch }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <header style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 20px',
      backgroundColor: '#f8f9fa',
      gap: '10px'
    }}>
      {/* Logo */}
      <div style={{
        fontSize: "20px",
        backgroundColor: "rgba(225, 16, 16, 0.1)",
        padding: "10px",
        borderRadius: "10px"
      }}>
        Product Store
      </div>

      {/* Search */}
      <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
        <input
          type="search"
          placeholder="Search..."
          onChange={handleInputChange}
          style={{
            padding: '10px',
            borderRadius: '10px',
            backgroundColor: 'rgba(225, 16, 16, 0.1)',
            color: 'green',
            fontSize: '16px',
            width: '150px'
          }}
        />
        <button type="submit" style={{
          fontSize: "16px",
          borderRadius: '10px',
          padding: '10px',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none'
        }}>Search</button>
      </form>

      {/* Cart */}
      <div style={{ position: 'relative' }}>
        <FaShoppingCart size={30} style={{ color: 'blue' }} />
        <span style={{
          position: 'absolute',
          top: '-5px',
          right: '-10px',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px'
        }}>
          {cartCount}
        </span>
      </div>
    </header>
  );
}

export default Header;