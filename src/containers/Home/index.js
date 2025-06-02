import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Home.css";
import homeImage from "../../assets/homeImage.jpg"; // Replace with your actual image path

// Import your 8 images for the grid (replace with your actual image paths)
import img1 from "../../assets/gallery/gallery_image1.jpg";
import img2 from "../../assets/gallery/gallery_image2.jpg";
import img3 from "../../assets/gallery/gallery_image3.jpg";
import img4 from "../../assets/gallery/gallery_image4.jpg";
import img5 from "../../assets/gallery/gallery_image5.jpg";
import img6 from "../../assets/gallery/gallery_image6.jpg";
import img7 from "../../assets/gallery/gallery_image7.jpg";
import img8 from "../../assets/gallery/gallery_image8.jpg";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="home-container">
        <div className="hero-image">
          <img src={homeImage} alt="Keira with sound bowls" />
        </div>

        <section className="intro-text">
          <h2>Rao's Sound Healing</h2>
          <p>
            At Rao’s Sound Healing, we offer a sanctuary for the mind and spirit
            in the midst of a fast-moving world. Rooted in the belief that sound
            is a powerful tool for restoration, our sessions are thoughtfully
            designed to help release stress, calm the nervous system, and invite
            a deep sense of peace. Whether you're navigating the pressures of
            daily life, recovering from burnout, or simply seeking stillness,
            Rao’s Sound Healing offers a gentle yet profound path back to
            balance. Through curated sound journeys—using crystal bowls, gongs,
            and harmonic tones—we help you reconnect with yourself and create
            space for healing from within.
          </p>

          {/* Gallery grid */}
          <div className="image-gallery">
            {[img1, img2, img3, img4, img5, img6, img7, img8].map(
              (src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Gallery image ${index + 1}`}
                  className="gallery-image"
                />
              )
            )}
          </div>

          {/* <div className="buttons">
            <button className="primary-button">Book Your Experience</button>
            <button className="secondary-button">Submit an Inquiry</button>
          </div> */}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
