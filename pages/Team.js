import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Team() {
  useEffect(() => {
    // אתחול של AOS
    AOS.init({
      duration: 1000, // משך האנימציה
      once: false, // ייתן לבצע את האנימציה כל פעם כשגוללים אל האלמנט
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 via-purple-600 to-pink-500 py-16">
      {/* כותרת עם אנימציה */}
      <div className="container mx-auto text-center mb-12">
        <h1
          className="text-6xl text-white font-extrabold tracking-wide drop-shadow-md"
          data-aos="fade-down"
        >
          🎤 חדשות הבידור 🎤
        </h1>
      </div>

      {/* תמונה ראשית */}
      <div className="container mx-auto text-center mb-16 max-w-screen-lg">
        <img
          src="/meorbidor.png" // תמונה גדולה למעלה
          alt="חדשות הבידור"
          className="mx-auto w-25 h-20 object-cover"
        />
      </div>

      {/* אדם 1 למעלה */}
      <div className="container mx-auto text-center mb-16" data-aos="fade-up">
        <h3 className="text-white font-bold text-2xl mb-4">מאור סיבוני ״המעור״</h3>
        <img
          src="/maor.png" // תמונה קטנה 1
          alt="מאור סיבוני"
          className="w-40 h-40 object-cover rounded-full mx-auto shadow-lg"
        />
        <p className="text-white mt-4 text-lg">מייסד ה״מעורלדת״ ו״חדשות הבידור״ - הרעיון נולד מהרצון לזכור את האירוע שכולם מדברים עליו אבל שוכחים את הפרטים למחרת, מטרתנו להביא לעולם את האמת מאחורי המעורלדת</p>
      </div>

      {/* תמונות קטנות עם שמות ותיאורים */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-8">
        <div className="text-center" data-aos="fade-up">
          <h3 className="text-white font-bold text-lg mb-4">שחף ישראל ״הפולי״</h3>
          <img
            src="/shahaf.png"
            alt="שחף ישראל"
            className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
          />
          <p className="text-white mt-4">גרעין המחבר בין חדשות הבידור מפיו נמסר - המעורלדת היא כמו יצירת אמונות, ואני כאן כדי לדווא שאף פרט לא יתפספס בסיקור</p>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-white font-bold text-lg mb-4">איתי ובר ״הלכלכוך״</h3>
          <img
            src="/itaydirty.png"
            alt="איתי ובר"
            className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
          />
          <p className="text-white mt-4">תמיד מתלכלכך בדרך לא צפויה אך למטרה טובה - ״אני כאן בשביל לסקר את כל הכאוס והשגעון, ולפעמים זה דורש גם קצת התכלכות, לא אכפת לי להיות מלוכלכך, העיקר שהסיפור יגיע לכולם!  </p>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <h3 className="text-white font-bold text-lg mb-4">ירין יצחק ״הארגז״</h3>
          <img
            src="/yarin.png"
            alt="ירין יצחק"
            className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
          />
          <p className="text-white mt-4">לשעבר אחראי כספים אך לא היה יכול להשאר אדיש למעורלדת - הייתי עסוק בניהול כספים, אבל ידעתי שההיסטוריה נכתבת בשטח – אז יצאתי לתעד את הרגעים שכולם יזכרו.”</p>
        </div>
      </div>

      {/* שורה שנייה עם רק 2 תמונות ממורכזות */}
      <div className="container mx-auto grid grid-cols-2 gap-12 px-8 justify-center">
        <div className="text-center" data-aos="fade-up" data-aos-delay="600">
          <h3 className="text-white font-bold text-lg mb-4">תומר דויב ״הסאחי״</h3>
          <img
            src="/tomer.png"
            alt="תומר דויב"
            className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
          />
          <p className="text-white mt-4">כל השנה משחק משחקי קופסה עם ה״פקים״ עד הדבר האמיתי - כל השנה אני מתחבא מאחורי משחקי קופסה וצובר כוח בשקט, כי שאני יוצא זה רק לדבר האמיתי: המעורלדת</p>
        </div>

        <div className="text-center" data-aos="fade-up" data-aos-delay="800">
          <h3 className="text-white font-bold text-lg mb-4">הראל בן-יוסף ״העין״</h3>
          <img
            src="/harel.png"
            alt="הראל בן יוסף"
            className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
          />
          <p className="text-white mt-4">יושב ומתובנן במתרחש וקופץ לתפוס את הפרטים החמים - “אני לא סתם צופה – אני סוקר את כל מה שמתרחש, כי שום פרט לא יכול להימלט מעיניי.” </p>
        </div>
      </div>
    </div>
  );
}

export default Team;