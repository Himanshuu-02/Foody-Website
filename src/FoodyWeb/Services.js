import React from "react";
import "../Services.css";

function Services() {
  const services = [
    {
      icon: "🍽️",
      title: "Dine-In Experience",
      description:
        "Enjoy a luxurious dining experience with curated menus and ambient settings.",
    },
    {
      icon: "🛵",
      title: "Fast Delivery",
      description:
        "We deliver your favorite meals hot and fresh right to your doorstep within 30 minutes.",
    },
    {
      icon: "👨‍🍳",
      title: "Top Chefs",
      description:
        "Our meals are crafted by award-winning chefs with premium quality ingredients.",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <p className="services-subtitle">
        Delicious food, top service, and fast delivery – everything you need at one place!
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
