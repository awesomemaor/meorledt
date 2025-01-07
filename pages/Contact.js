import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 via-purple-700 to-pink-600 text-white">
      {/* כותרת */}
      <div className="text-center py-16">
        <h1
          className="text-6xl font-extrabold tracking-wide drop-shadow-lg mb-4"
          data-aos="fade-down"
        >
          צור קשר
        </h1>
        <p className="text-xl text-indigo-300">
          יצירת קשר עם מאור וכל צוות חדשות הבידור
        </p>
      </div>

      {/* פרטי מאור */}
      <div
        className="container mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl shadow-xl py-12 px-8 mb-16 max-w-5xl"
        data-aos="zoom-in"
      >
        <h2 className="text-4xl font-bold text-center mb-6">
          מאור סיבוני
        </h2>
        <p className="text-center text-lg text-indigo-200 mb-8">
          מייסד מעורלדת וכל מה שמסביב!
        </p>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8">
          <div className="text-center">
            <p className="text-xl font-semibold text-white mb-2">📸 אינסטגרם</p>
            <a
              href="https://www.instagram.com/maor_awesome"
              className="text-yellow-300 underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              @maor_awesome
            </a>
          </div>
          <div className="text-center">
            <p className="text-xl font-semibold text-white mb-2">🌐 פייסבוק</p>
            <a
              href="https://www.facebook.com/maor.sibony"
              className="text-yellow-300 underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Maor Sibony
            </a>
          </div>
        </div>
      </div>

      {/* פרטי צוות הבידור */}
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          צוות חדשות הבידור
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "שחף ישראל", instagram: "@shahaf" },
            { name: "איתי ובר", instagram: "@itay" },
            { name: "ירין יצחק", instagram: "@yarin" },
            { name: "תומר דויב", instagram: "@tomer" },
            { name: "הראל בן-יוסף", instagram: "@harel" },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-purple-700 to-indigo-700 rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform"
              data-aos="fade-up"
            >
              <h3 className="text-2xl font-bold text-yellow-300">{member.name}</h3>
              <a
                href={`https://www.instagram.com/${member.instagram.slice(1)}`}
                className="text-indigo-300 underline mt-2 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {member.instagram}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;