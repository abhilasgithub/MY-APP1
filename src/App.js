import React, { useState } from 'react';
import './App.css';
import Products from './Products'; // Import the Products component
import About from './About'; // Import the About component
import Footer from './Footer'; // Import the Footer component
import Contact from './Contact'; // Import the Contact component
import SignIn from './SignIn'; // Import the SignIn component
import SignUp from './SignUp'; // Import the SignUp component
import Cart from './Cart'; // Import the Cart component

export default function App() {
  const [activeSection, setActiveSection] = useState('home'); // State to track the active section

  // Click handlers for navigation
  const handleNavigationClick = (section) => {
    setActiveSection(section);
  };

  // Redirect to home when 'Continue Shopping' is clicked in Cart
  const handleContinueShopping = () => {
    setActiveSection('home');
  };

  return (
    <div className="App">
      {/* Shared Header */}
      <header className="App-header">
        <p className="shopItText">ShopIT</p>
        <div className="navigation">
          <div onClick={() => handleNavigationClick('home')}>Home</div>
          <div onClick={() => handleNavigationClick('products')}>Products</div>
          <div onClick={() => handleNavigationClick('about')}>About</div>
          <div onClick={() => handleNavigationClick('contact')}>Contact</div>
        </div>
        <div className="buttons">
          <button className="btn" onClick={() => setActiveSection('signin')}>Sign In</button>
          <button className="btn" onClick={() => setActiveSection('signup')}>Sign Up</button>
          <button className="btn" onClick={() => setActiveSection('cart')}>Cart</button>
        </div>
      </header>

      {/* Shared Image Container */}
      <div className="image-container">
        <div className="image-overlay">
          <p className="image-text">Shop everything here!!</p>
          <p>All your requirements made available at your fingertips</p>
        </div>
        <img
          src="pexels-matthew-montrone-230847-1324803.jpg"
          alt="ShopIT"
          className="shopImage"
        />
      </div>

      {/* Dynamic Content */}
      {activeSection === 'home'}
      {activeSection === 'products' && <Products />}
      {activeSection === 'about' && <About />}
      {activeSection === 'contact' && <Contact />}
      {activeSection === 'signin' && <SignIn />}
      {activeSection === 'signup' && <SignUp />}
      {activeSection === 'cart' && <Cart onContinueShopping={handleContinueShopping} />} {/* Cart page */}

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
