import React from "react";
import "../Blog.css";

function Blog() {
  return (
    <div className="blog-container">
      <h2 className="blog-title">🍴 Foodie's Blog</h2>
      <p className="blog-subtitle">Discover stories, tips & secrets from the food world</p>

      <div className="blog-cards">
        <div className="blog-card">
          <img src="https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg" alt="blog" />
          <h3>Top 5 Healthy Breakfasts</h3>
          <p>Kickstart your day with these easy and energizing breakfast recipes loved by nutritionists.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="https://blog.swiggy.com/wp-content/uploads/2024/10/Image1_Pani-Puri-1024x538.jpg" alt="blog" />
          <h3>Street Food Diaries</h3>
          <p>Explore the hidden street gems that offer unforgettable flavors at every bite.</p>
          <button>Read More</button>
        </div>

        <div className="blog-card">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0d7DPVLSQfPMxiZvQJqYlpn0Ufno0ZmupQ&s" alt="blog" />
          <h3>Secrets from a Chef</h3>
          <p>Professional chefs reveal their tips on perfect seasoning, plating, and flavor balancing.</p>
          <button>Read More</button>
        </div>
      </div>
      <h2 className="testimonial-title">❤️ What Our Users Say</h2>
      <div className="testimonials">
        <div className="testimonial-card">
          <p>"This app has completely changed how I discover food. The blog tips are amazing!"</p>
          <h4>- Priya Sharma</h4>
        </div>
        <div className="testimonial-card">
          <p>"Loved the street food recommendations! Tried two of them and they were delicious."</p>
          <h4>- Aman Gupta</h4>
        </div>
        <div className="testimonial-card">
          <p>"Beautiful design, smooth experience, and the blog reads are a must every week!"</p>
          <h4>- Neha Jain</h4>
        </div>
      </div>
    </div>
  );
}
export default Blog;
