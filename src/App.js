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
    // הוספנו את המחלקה custom-cursor לשינוי סמן העכבר
    <div className={`${isDarkMode ? 'dark' : ''} custom-cursor`}>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <main className="scroll-smooth">
        <section id="home">
          <Home />
        </section>
        <section id="next" className="bg-gradient-to-b from-indigo-700 to-purple-600  h-screen bg-gray-400 flex items-center justify-center">
          <Next />
        </section>
        <section id="gallery" className="h-screen bg-gray-300 flex items-center justify-center">
          <h2 className="text-4xl font-bold">גלריית זכרונות</h2>
        </section>
        <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-4xl font-bold">אודות</h2>
        </section>
        <section id="contact" className="h-screen bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold">צור קשר</h2>
        </section>
      </main>
    </div>
  );
}

export default App;