import React, { useState } from 'react';
import StaggeredDropDown from './StaggeredDropDown';
import CanvasAnimation from './CanvasAnimation';
import Link from 'next/link';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // אם זה במובייל, נסגור את התפריט אחרי לחיצה
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header id="main-header" className="bg-gradient-to-r from-purple-900 to-purple-600 text-white py-2 shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 space-y-2 lg:space-y-0">
        {/* כותרת */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl lg:text-3xl font-extrabold tracking-widest">
            <span className="text-purple-300">מעור</span>
            <span className="text-white">לדת</span>
          </h1>
        </div>

        {/* כפתור המבורגר - יוצג רק במובייל */}
        <div className="lg:hidden">
          <StaggeredDropDown isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>

        {/* תפריט ניווט - יוצג רק בגדלים גדולים */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-7 items-center text-lg bg-purple-800 lg:bg-transparent rounded-lg shadow-lg p-4 lg:p-0`}
        >
          <li className="hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300">
            <Link href="#contact">
              צור קשר
            </Link>
          </li>
          <li className="hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300">
            <Link href="#team">
              חדשות הבידור
            </Link>
          </li>
          <li className="hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300">
            <Link href="#alcohol">
              עולם האלכוהול
            </Link>
          </li>
          <li className="hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300">
            <Link href="#gallery">
              גלריית זכרונות
            </Link>
          </li>
          <li className="hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300">
            <Link href="#next">
              מעורלדת 2025
            </Link>
          </li>
          <li className="hover:bg-purple-500 hover:text-white rounded-lg transition-all duration-300">
            <Link href="/">
              דף הבית
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;