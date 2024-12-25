import React from 'react';

function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 to-purple-600 text-white">
      <header className="w-full py-8">
        <h1 className="text-6xl font-extrabold text-center drop-shadow-lg">
          <span className="text-white">מעור</span>
          <span className="text-purple-700">לדת</span>
        </h1>
      </header>
      <main className="flex flex-col items-center m-8 space-y-16">
        {/* פסקה מרכזית */}
        <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-4xl text-center border border-purple-500">
          <h2 className="text-4xl font-semibold text-purple-300 leading-snug">
            ברוכים הבאים לאתר הרשמי של <span className="text-purple-400">מעורלדת</span>
          </h2>
          <p className="mt-4 text-gray-300 leading-relaxed">
            כאן מתחיל הסיפור שלכם עם הלילה הכי משוגע, מרגש ובלתי נשכח (או אולי כן נשכח…) של השנה.
            זה המקום שבו כל מה שצריך לדעת על האירוע האגדי מתעורר לחיים – עדכונים חמים, הפתעות מסקרנות, ורמזים שירעידו את הלבבות, יבעירו את הדמיון, וישלחו לכם צמרמורות של התרגשות.
          </p>
        </div>

        {/* פסקה נוספת */}
        <div className="bg-transparent p-8 rounded-lg shadow-lg max-w-3xl text-center border border-purple-500">
          <p className="text-xl text-gray-300 leading-relaxed">
            מעורלדת זה לא רק מסיבה – זו חוויה שמרגישה כמו חלום שמתעורר לחיים, עם מוזיקה שתרטיט את הנשמה, חברים שגורמים לזמן לעצור, ואווירה שתמלא אתכם באנרגיה עד הבוקר… או עד שהכבד יכריז על כניעה.
          </p>
          <p className="mt-4 text-purple-400 font-semibold">
            אז תפסו כוס, חייכו אל המסך, והתכוננו לצל  ול לעולם של מעורלדת 2025. 🍾 לחיי החוויות שכנראה נשכח בבוקר שלמחרת!
          </p>
        </div>

        {/* תמונה */}
        <div className="w-full max-w-2xl">
          <div className="rounded-lg shadow-xl overflow-hidden aspect-video">
            <img
              src="/WhatsApp Image 2024-12-23 at 07.26.03.jpeg"
              alt="מעור סיבוני המייסד"
              className="w-full h-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* כפתורים */}
        <div className="flex justify-between w-full max-w-2xl mt-8 space-x-4">
          {/* כפתור לחקר העבר */}
          <button
            className="w-1/2 px-6 py-4 bg-gradient-to-r from-purple-700 to-purple-500 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => ('/gallery')}
          >
            בואו לחקור את העבר
          </button>

          {/* כפתור לשנה הבאה */}
          <button
            className="w-1/2 px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-400 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            onClick={() => ('/next')}
          >
            ?מה מחכה לנו ב-2025
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;