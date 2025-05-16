// src/pages/About/index.js
import React from 'react';
import Header from '../../components/Header';
import './Story.css';

import image1 from '../../assets/story/story_image1.jpg';
import image2 from '../../assets/story/story_image1.jpg';
import image3 from '../../assets/story/story_image1.jpg';

const Story = () => {
  return (
    <div>
      <Header />
      <main className="story-container">
        <section className="intro-text">
          <h2>Who I Am</h2>
          <p>
            My name is Keira Rao, and I’m a bilingual sound healing practitioner (Mandarin & English) based in the San Gabriel Valley, Los Angeles. I’ve been practicing since 2024 and am passionate about creating peaceful, heart-centered spaces where others can find rest, release, and renewal through the power of sound.
          </p>
        </section>

        {/* Section 1 */}
        <div className="image-text-section">
          <img src={image1} alt="Sound bath session" className="about-image" />
          <div className="text-content">
            <h3>What is a Sound Bath?</h3>
            <p>
              A sound bath is an immersive experience using vibrations to promote relaxation, healing, and self-discovery. Instruments like gongs, crystal bowls, and chimes create frequencies that help calm the mind and body.
            </p>
            <p>
              It’s not a literal bath; instead, you're surrounded by sound waves that bring you into deep relaxation and reflection.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="image-text-section reverse">
          <div className="text-content">
            <h3>Benefits of Sound Healing</h3>
            <ul>
              <li>Reduced stress and anxiety</li>
              <li>Improved sleep quality</li>
              <li>Enhanced mood and emotional balance</li>
              <li>A sense of clarity and emotional release</li>
            </ul>
          </div>
          <img src={image2} alt="Sound healing instruments" className="about-image" />
        </div>

        {/* Section 3 */}
        <div className="image-text-section">
          <img src={image3} alt="Relaxation environment" className="about-image" />
          <div className="text-content">
            <h3>What Happens During a Sound Bath?</h3>
            <p>
              You’ll lie on a yoga mat, close your eyes, and let the sound waves carry you. Instruments like crystal bowls and gongs fill the space with resonant tones that help quiet the mind and relax the body.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Story;
