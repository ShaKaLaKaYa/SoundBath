import React from "react";
import Header from "../../components/Header";
import "./Membership.css";

const Membership = () => {
  return (
    <div>
      <Header />
      <main className="membership-container">
        <section className="membership-section">
          <h2>Group Sound Healing (Private Events)</h2>
          <p className="description">
            <strong>Perfect for:</strong> Team-building, employee wellness days, meditation retreats, private celebrations and ceremonies
          </p>
          <p><strong>Duration:</strong> 75 minutes</p>

          <div className="pricing-box">
            <h3>At client’s venue or partnered location:</h3>
            <ul>
              <li>Up to 8 people: <strong>$500</strong></li>
              <li>9–15 people: <strong>$900</strong></li>
              <li>16–20 people: <strong>$1,200</strong></li>
              <li>21+ people: <em>Multiple facilitators required. Custom bookings, feel free to reach out directly.</em></li>
            </ul>
          </div>

          <div className="pricing-box">
            <h3>Group Sound Healing (At our healing studio)</h3>
            <p><strong>$69 per person</strong></p>
            <p><em>Booking available through Eventbrite</em></p>
          </div>
        </section>

        <section className="membership-section">
          <h2>Private 1-on-1 Sound Healing Session</h2>
          <p><strong>Ideal for:</strong> Emotional release, stress relief, and energetic rebalancing</p>
          <p><strong>Location:</strong> Private healing space</p>
          <p><strong>Duration:</strong> 75 minutes</p>
          <p><strong>Rate:</strong> $258 per session</p>

          <div className="session-includes">
            <h3>Includes:</h3>
            <ul>
              <li>Space cleansing & energetic setup</li>
              <li>Personalized energy consultation and intention setting</li>
              <li>Use of crystal bowls, Tibetan singing bowls, gongs, chimes, and more</li>
              <li>Customized frequency and sound healing</li>
              <li>Aromatherapy & guided meditation</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Membership;
