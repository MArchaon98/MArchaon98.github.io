import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [date, setDate] = useState('');

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Service booked for: ${date}`);
  };

  return (
    <>
      <section className="hero">
        <h1>Welcome to GreenCare</h1>
        <p>Your lawn deserves the best care.</p>
        <button>Order Service</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Mowing</li>
          <li>Edging</li>
          <li>Fertilizing</li>
          <li>Leaf Removal</li>
        </ul>
      </section>

      <section className="booking">
        <h2>Book a Service</h2>
        <form onSubmit={handleBookingSubmit}>
          <label htmlFor="date">Select Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">Book Now</button>
        </form>
      </section>

      <section className="testimonials">
        <h2>Customer Reviews</h2>
        <blockquote>
          “Amazing service! My lawn has never looked better.”
        </blockquote>
        <cite>- Sarah L.</cite>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: support@greencare.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>
    </>
  );
};

export default App;
