import React, { useState } from 'react';
import './App.css'; // Import styles if necessary

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All'); // State for selected category

  // Define the product data
  const products = [
    { name: 'Bag', category: 'Men', price: '$25.00', image: 'e1.jpg' },
    { name: 'White Shirt', category: 'Men', price: '$15.00', image: 'e2.jpg' },
    { name: 'Wrist Watch', category: 'Men', price: '$40.00', image: 'e3.webp' },
    { name: 'Bracelet', category: 'Jewelry', price: '$80.00', image: 'e4.jpg' },
    { name: 'Memory Card', category: 'Electronics', price: '$19.00', image: 'e5.jpg' },
    { name: 'Marshall Speaker', category: 'Electronics', price: '$150.00', image: 'e6.webp' },
    { name: 'Television', category: 'Electronics', price: '$200.00', image: 'e7.jpg' },
    { name: 'White Top', category: 'Women', price: '$18.00', image: 'e8.jpg' },
    { name: 'Floral Top', category: 'Women', price: '$18.00', image: 'e9.jpg' },
    { name: 'Checks Shirt', category: 'Women', price: '$20.00', image: 'e10.jpg' },
  ];

  // Filter products based on the selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="latest-products">
        <h2>Latest Products</h2>
      </div>

      <hr className="line" />

      {/* Category Buttons */}
      <div className="category-buttons">
        <button className="category-btn" onClick={() => setSelectedCategory('All')}>All</button>
        <button className="category-btn" onClick={() => setSelectedCategory('Men')}>Men</button>
        <button className="category-btn" onClick={() => setSelectedCategory('Women')}>Women</button>
        <button className="category-btn" onClick={() => setSelectedCategory('Jewelry')}>Jewelry</button>
        <button className="category-btn" onClick={() => setSelectedCategory('Electronics')}>Electronics</button>
      </div>

      {/* Display Filtered Products */}
      <div className="products-display">
        {filteredProducts.map((product, index) => (
          <div key={index} className="product-image">
            <img src={product.image} alt={product.name} className="product-img" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <hr className="separator" />
            <div className="product-buttons">
              <button className="product-btn">Buy Now</button>
              <button className="product-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
