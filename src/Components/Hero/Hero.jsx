import React, { useRef, useState } from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

// Import your videos
import vid1 from '../../assets/vid1.mp4';
import vid2 from '../../assets/vid2.mp4';

const Hero = () => {
  const videos = [vid1, vid2];
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const videoRef = useRef(null);
  let startX = 0;

  // When video ends → play next
  const handleVideoEnd = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  // Detect swipe
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;

    if (startX - endX > 50) {
      // Swipe left → next video
      setCurrentIndex((prev) => (prev + 1) % videos.length);
    } else if (endX - startX > 50) {
      // Swipe right → previous video
      setCurrentIndex((prev) =>
        prev === 0 ? videos.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className='hero container'>
      <div className="hero-text">

        {/* --- H1 stays here --- */}
        <h1>"Your Vision, Our Expertise"</h1>

        {/* --- Your Paragraph --- */}
        <p>
          At Vision One Technologies, we turn ideas into powerful digital solutions.
          We focus on quality, innovation, and seamless user experience to help 
          businesses build strong websites, applications, and digital systems that drive growth.
        </p>

        {/* --- INSERTED VIDEO CAROUSEL HERE --- */}
        <div
          className="video-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          style={{ width: "100%", marginTop: "20px" }}
        >
          <video
            ref={videoRef}
            key={currentIndex}
            src={videos[currentIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnd}
            style={{
              width: "100%",
              maxHeight: "350px",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
