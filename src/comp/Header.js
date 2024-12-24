import React from 'react';

function Header({ toggleTheme, isDarkMode }) {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-purple-600 text-white py-4 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-extrabold tracking-widest">
          <span className="text-purple-300">מעור</span>
          <span className="text-white">לדת</span>
        </h1>
        <ul className="flex space-x-7 text-lg">
          <li>
            <a href="#contact" className="hover:text-purple-300 transition duration-500">
              צור קשר
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-purple-300 transition duration-500">
              אודות
            </a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-purple-300 transition duration-500">
              גלריית זכרונות
            </a>
          </li>
          <li>
            <a href="#next" className="hover:text-purple-300 transition duration-500">
              מעורלדת 2025
            </a>
          </li>
          <li>
            <a href="#home" className="hover:text-purple-300 transition duration-500">
              דף הבית
            </a>
          </li>
        </ul>
        <button
          onClick={toggleTheme}
          className="bg-purple-500 hover:bg-purple-700 text-white px-4 py-2 rounded-lg shadow-md transition duration-300"
        >
          <img 
            src={isDarkMode ? '/icons8-sun-50.png' : '/icons8-dark-mode-50.png'} 
            alt="theme icon" 
            className='w-8 h-8' 
          />
        </button>
      </nav>
    </header>
  );
}

export default Header;
