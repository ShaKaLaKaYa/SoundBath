import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer"
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
          <h2>What is a Sound Bath?</h2>
          <p>
            A sound bath is also called sound healing
            which is an immersive experience using sound vibrations to promote
            relaxation, healing, and self-discovery. You’ve likely already felt
            the power of sound through the music you enjoy—it helps you process
            emotions and find inner release. In a sound bath, instruments like
            gongs, crystal bowls, Tibetan bowls, and chimes create soothing
            frequencies and vibrations that help calm the mind, relax the body,
            and support emotional and energetic healing. It’s not a literal
            “bath” in the traditional sense; rather, you are surrounded by sound
            waves and vibrations that encourage deep relaxation. As you immerse
            yourself in these healing sounds, you’ll have the opportunity to
            explore your thoughts, emotions, and memories, gaining deeper
            insight into your inner world. Whether you seek relaxation,
            creativity, or spiritual connection, a sound bath amplifies your
            intentions and supports personal growth.
          </p>

          {/* Gallery grid */}
          <div className="image-gallery">
            {[img1, img2, img3, img4, img5, img6, img7, img8].map((src, index) => (
              <img key={index} src={src} alt={`Gallery image ${index + 1}`} className="gallery-image" />
            ))}
          </div>

          <div className="buttons">
            <button className="primary-button">Book Your Experience</button>
            <button className="secondary-button">Submit an Inquiry</button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
};

export default Home;
