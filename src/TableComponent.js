import React, { useState, useEffect } from 'react';

function TableComponent({ onAddToCart, onRemoveFromCart, searchTerm }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', padding: '10px', boxSizing: 'border-box' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Product Gallery</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: '15px',
      }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{
            border: '1px solid #ddd',
            borderRadius: '10px',
            padding: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100px', height: '130px', objectFit: 'contain' }}
            />
            <h4 style={{ fontSize: '14px', margin: '10px 0', textAlign: 'center' }}>
              {product.title.substring(0, 30)}...
            </h4>
            <p style={{ fontWeight: 'bold' }}>${product.price}</p>
            <button
              onClick={() => onAddToCart(product)}
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '6px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                fontSize: '14px',
              }}
            >
              Add to Cart
            </button>
            <button
              onClick={() => onRemoveFromCart(product)}
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '6px 10px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
                fontSize: '14px',
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TableComponent;