import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ייבוא של AOS CSS
import '/styles/globals.css'; // CSS גלובלי
import Header from '/comp/Header';
import Next from './Next'; // דף הבא
import Gallery from './Gallery'; // גלריה
import Alcohol from './Alcohol';
import Team from './Team'; // קומפוננטת Team
import Contact from './Contact'; // צור קשר


function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} relative`}>
      {/* Header */}
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* דף הבית עם רקע סרטון */}
      <section id="index" className="min-h-screen relative">
        <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <main className="scroll-smooth relative z-10">
          <Component {...pageProps} />
        </main>
      </section>

      {/* חלקים נוספים */}
      <section id="next" className="bg-gradient-to-b from-indigo-700 to-purple-600 min-h-screen flex items-center justify-center">
        <Next />
      </section>

      <section id="gallery" className="bg-gradient-to-b from-indigo-700 to-purple-600 min-h-screen flex items-center justify-center">
        <Gallery />
      </section>

      <section id="alcohol" className="bg-gradient-to-b from-indigo-700 to-purple-600 min-h-screen flex items-center justify-center">
        <Alcohol />
      </section>

      <section id="team" className="bg-gradient-to-b from-indigo-700 to-purple-600 min-h-screen flex items-center justify-center">
        <Team />
      </section>
    
      <section id="contact" className="bg-gradient-to-b from-indigo-700 to-purple-600 min-h-screen flex items-center justify-center">
        <Contact />
      </section>

    </div>
  );
}

export default MyApp; 