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
    <>
      <Header 
        cartCount={cartItems.length} 
        onSearch={setSearchTerm} // pass the setter function
      />
      <SideBar />
      <TableComponent 
        onAddToCart={handleAddToCart}
        onRemoveFromCart={handleRemoveFromCart}
        searchTerm={searchTerm} // pass search term
      />
    </>
  );
}

export default App;