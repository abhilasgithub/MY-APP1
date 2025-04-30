import React from 'react';
import './App.css'; // Import styles if necessary

const About = () => {
  return (
    <div className="about-page">
      {/* Image at the top */}
      

      <div className="about-content">
        <h2 className="about-heading">About Us</h2> {/* Heading in bold */}
        <hr className="line" />
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas provident ipsam, veritatis nostrum velit quos recusandae est mollitia esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem praesentium, doloremque distinctio nesciunt porro tempore quis eaque labore voluptatibus ea necessitatibus exercitationem tempora molestias. Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint nemo totam dolorum! Reprehenderit delectus expedita a alias nam recusandae illo debitis repellat libero, quasi explicabo molestiae saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis excepturi harum numquam vel nihil? Ipsum in
        </p>

        <h2 className="about-heading">Our Products</h2> {/* Heading in bold */}
        <hr className="line" />
        
        {/* Container for products */}
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-image">
            <img src="e11.jpg" alt="Product 3" className="product-img" />
            <p className="product-name">Men's Clothing</p>
          </div>

          {/* Product 2 */}
          <div className="product-image">
            <img src="e12.jpg" alt="Product 4" className="product-img" />
            <p className="product-name">Women's Clothing</p>
          </div>

          {/* Product 3 */}
          <div className="product-image">
            <img src="e13.webp" alt="Product 5" className="product-img" />
            <p className="product-name">Jewellery</p>
          </div>

          {/* Product 4 */}
          <div className="product-image">
            <img src="e14.jpg" alt="Product 6" className="product-img" />
            <p className="product-name">Electronics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
