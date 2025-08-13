import React, { useState, useEffect } from "react";
import "../About.css";
import AboutClass from "./AboutClass";

function About() {
  // Dynamic stats
  const [stats, setStats] = useState({
    restaurants: 0,
    happyUsers: 0,
    dishes: 0,
  });

  // Testimonials
  const testimonials = [
    {
      name: "Aman Gupta",
      review:
        "Foody helped me discover amazing restaurants I never knew existed! 🍕",
    },
    {
      name: "Priya Sharma",
      review:
        "The price filter is a game changer! Found the best budget meals in minutes.",
    },
    {
      name: "Rahul Verma",
      review: "Super smooth experience and great UI! Highly recommended! ⭐⭐⭐⭐⭐",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Counter effect for stats
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        restaurants:
          prev.restaurants < 250 ? prev.restaurants + 5 : prev.restaurants,
        happyUsers:
          prev.happyUsers < 5000 ? prev.happyUsers + 50 : prev.happyUsers,
        dishes: prev.dishes < 1200 ? prev.dishes + 20 : prev.dishes,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Auto change testimonial every 3 seconds
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 3000);
    return () => clearInterval(testimonialInterval);
  }, []);

  return (
    <div className="about-container">
      <h1>About Foody 🍽️</h1>
      <p className="intro">
        Welcome to <strong>Foody</strong> – your ultimate food discovery platform!
        Whether you're craving street food, fine dining, or something healthy,
        we've got something for everyone.
      </p>

      <section className="about-section">
        <h2>🍔 What We Do</h2>
        <p>
          We bring together the best restaurants from your city to one place. 
          Browse dishes, filter by price, and find the perfect meal in seconds.
        </p>
      </section>

      <section className="about-section">
        <h2>📍 Why Choose Us?</h2>
        <ul>
          <li>⚡ Quick restaurant search & filters</li>
          <li>📖 Detailed restaurant view</li>
          <li>📱 Fast and responsive interface</li>
          <li>👌 Easy-to-use experience</li>
        </ul>
      </section>

      {/* Dynamic stats */}
      <section className="stats-section">
        <div className="stat">
          <h3>{stats.restaurants}+</h3>
          <p>Restaurants Listed</p>
        </div>
        <div className="stat">
          <h3>{stats.happyUsers}+</h3>
          <p>Happy Users</p>
        </div>
        <div className="stat">
          <h3>{stats.dishes}+</h3>
          <p>Dishes Served</p>
        </div>
      </section>

      <section className="about-section">
        <h2>🚀 Our Mission</h2>
        <p>
          To connect food lovers with the best local restaurants, 
          making food discovery simple, fun, and fast!
        </p>
      </section>

      {/* Testimonial Carousel */}
      <section className="testimonial-section">
        <h2>💬 What People Say</h2>
        <div className="testimonial">
          <p>"{testimonials[currentTestimonial].review}"</p>
          <h4>- {testimonials[currentTestimonial].name}</h4>
        </div>
      </section>
      {/* <AboutClass name={"Himanshu"} location={"panipat"}/> */}
      <AboutClass/>
    </div>
  );
}

export default About;
