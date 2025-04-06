import React, { useState, useEffect } from 'react';
import './Home.css';

const images = [
  '/images/school1.jpg',
  '/images/school2.jpg',
  '/images/school3.jpg',
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <h2 className='h2'>🏫 Welcome to Panchatantra School</h2>
      <h3 className='h3'>School Of Excellence</h3>

      {/* Image Slider */}
      <section className="slider">
        <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
      </section>

      {/* Why Panchatantra Section */}
      <section className="why-iish">
        <div className="container-custom">
          <div className="sec-s-title">
            <h2><span>Why</span> Panchatantra?</h2>
        
          </div>

          <div className="why-iish-boxes">
            <div className="box">
              <ul>
                <li className="rounded-top-left">
                  <div className="image">
                    <img src="/images/sports-icon.png" alt="Sports Facilities" />
                  </div>
                  <div className="text">
                    <h3>3+<br />Sports Facilities</h3>
                  </div>
                </li>
                <li className="rounded-bottom-left">
                  <div className="image">
                    <img src="/images/student-teacher.png" alt="Student Teacher Ratio" />
                  </div>
                  <div className="text">
                    <h3>20:1<br />Student Teacher Ratio</h3>
                  </div>
                </li>
              </ul>
            </div>

            <div className="box">
              <div className="image">
                <img src="/images/growth-icon.png" alt="Growth" />
              </div>
              <div className="text">
                <h3>360°<br />Growth</h3>
              </div>
            </div>

            <div className="box">
              <ul>
                <li className="rounded-top-right">
                  <div className="image">
                    <img src="/images/excellence.png" alt="Excellence" />
                  </div>
                  <div className="text">
                    <h3>3+<br />Years of Excellence</h3>
                  </div>
                </li>
                <li className="rounded-bottom-right">
                  <div className="image">
                    <img src="/images/clubs-icon.png" alt="Clubs" />
                  </div>
                  <div className="text">
                    <h3>3+<br />Clubs</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Cards Section */}
<section className="footer-cards">
  <div className="container-custom">
    <div className="why-iish-boxes">
      {/* Documents Required */}
      <div className="box">
        <div className="text">
          <h3>📄 Documents Required</h3>
          <ul style={{ textAlign: 'left', marginTop: '10px' }}>
            <li>1. Passport size photographs</li>
            <li>2. Birth certificate</li>
            <li>3. Aadhar Card / Passport</li>
            <li>4. Residential proof</li>
            <li>5. Bonafide certificate (for EY to Grade I)</li>
            <li>6. Previous year report card (for Grade II – XI)</li>
          </ul>
        </div>
      </div>

      {/* Address and Contact */}
      <div className="box">
        <div className="text">
          <h3>📍 Address & Contact</h3>
          <p style={{ marginTop: '10px', textAlign: 'left' }}>
            Panchatantra School,<br />
            Near Green Valley Park,<br />
            Hyderabad, Telangana - 500084<br />
            📞 +91 98765 43210<br />
            ✉️ info@panchatantraschool.com
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Home;
