import React, { useState } from 'react';
import './index.css';
import Header from './comp/Header';
import Home from './comp/Home';
import Next from './comp/Next';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
<div className="relative">
      {/* רקע וידאו */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0 transform opacity-80"
        src="background.mp4" // הנתיב לסרטון
        autoPlay
        loop
        muted
      />
      {/* תוכן האתר */}
      <div
        className={`${isDarkMode ? 'dark' : ''} relative z-10`}
        style={{ cursor: "url('/crusorface.png'), auto" }}
      >
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main className="scroll-smooth">
          <section id="home">
            <Home />
          </section>
          <section
            id="next"
            className="bg-gradient-to-b from-indigo-700 to-purple-600 h-screen bg-gray-400 flex items-center justify-center"
          >
            <Next />
          </section>
          <section
            id="gallery"
            className="h-screen bg-gray-300 flex items-center justify-center"
          >
            <h2 className="text-4xl font-bold">גלריית זכרונות</h2>
          </section>
          <section
            id="about"
            className="h-screen bg-gray-200 flex items-center justify-center"
          >
            <h2 className="text-4xl font-bold">אודות</h2>
          </section>
          <section
            id="contact"
            className="h-screen bg-gray-100 flex items-center justify-center"
          >
            <h2 className="text-4xl font-bold">צור קשר</h2>
          </section>
        </main>
      </div>

      {/* שכבת רקע כהה (לא חובה) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-0"></div>
    </div>
  );
}

export default App;