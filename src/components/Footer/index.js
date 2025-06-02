import React, { useState } from "react";
import "./Footer.css";
import logo from '../../assets/logo.jpg';

// Placeholder icons using react-icons (you can replace with your own SVGs or images)
import { FaInstagram, FaFacebookF, FaYoutube, FaTiktok, FaSpotify, FaMusic } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError(true);
    } else {
      setError(false);
      // Handle subscription logic here
      alert("Thank you for joining!");
      setEmail("");
    }
  };

  return (
    <footer>
      <section className="newsletter-section">
        <h5>Start your</h5>
        <h2>MINDFUL JOURNEY</h2>
        <p>
          through gentle reflections and a path of presence, clarity, and connection that brings you closer to yourself.
        </p>

        {/* <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email"
            required
          />
          <button type="submit">JOIN</button>
        </form>
        {error && <p className="error-message">⚠️ This field is required.</p>} */}
      </section>

      <section className="footer-bottom">
        <div className="logo">
          <img src={logo} alt="Keria Sound Healing Logo" />
        </div>

        <div className="social-icons">
          <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer"><FaFacebookF /></a>
          <a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noreferrer"><FaYoutube /></a>
          <a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noreferrer"><FaTiktok /></a>
          <a href="https://spotify.com" aria-label="Spotify" target="_blank" rel="noreferrer"><FaSpotify /></a>
          <a href="https://music.apple.com" aria-label="Apple Music" target="_blank" rel="noreferrer"><FaMusic /></a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
