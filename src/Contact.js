import React from 'react';
import './Contact.css'; // Assuming you'll style this later

const Contact = () => {
    return (
        <div className="contact-container">
            <form className="contact-form">
                <h2>Contact Us</h2>

                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        className="input-field"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Enter your message" 
                        className="input-field"
                    />
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>

          
        </div>
    );
};

export default Contact;
