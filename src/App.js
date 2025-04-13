import React, { useState } from 'react';
import Header from './Header'; 
import SideBar from './SideBar';
import TableComponent from './TableComponent'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddToCart = (product) => {
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevCart) => {
      const index = prevCart.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        return updatedCart;
      }
      return prevCart;
    });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header 
        cartCount={cartItems.length} 
        onSearch={setSearchTerm} 
      />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <SideBar />
        <div style={{ flex: 1 }}>
          <TableComponent 
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            searchTerm={searchTerm} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;