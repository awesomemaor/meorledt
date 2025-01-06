import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Next() {
  const { ref: firstSectionRef, inView: firstSectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 via-purple-600 to-pink-500 text-white flex flex-col justify-center items-center py-12">
      <section ref={firstSectionRef} className="max-w-4xl mx-auto text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={firstSectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-purple-600 to-indigo-800 p-4 border-4 border-indigo-700 rounded-lg"
        >
          מעורלדת 2025
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={firstSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl mb-8 text-gray-200"
        >
          השנה, מעורלדת תעשה היסטוריה. זה לא יהיה רק לילה – זה יהיה אירוע שישנה את חוקי המשחק. חוויות שיטריפו את החושים, רגעים שיגרמו ללב לפעום בקצב מסחרר, וכוסות שיתמלאו שוב ושוב עד שכוח המשיכה יזכיר לכולנו מי באמת שולט.
          ב-2025, אנחנו שוברים כל גבול, שוברים כל שיא, ושוברים… אולי גם קצת את עצמנו.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={firstSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-l mb-8 text-gray-200"
        >
          אז תכינו את הכבד, תתכוננו לטירוף, ותשמרו מקום בהיסטוריה – כי מעורלדת 2025 הולכת להוכיח לכולם מי המאסטר של הלילה.
          שתו, תחגגו, תאהבו – זה הרגע שלכם. 🍻
        </motion.p>

        {/* תצוגת התמונות */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <motion.div
            initial={{ opacity: 0, x: -100, y: 100 }}
            animate={firstSectionInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -100, y: 100 }}
            transition={{ duration: 1, delay: 1 }}
            className="w-full h-60 flex justify-center items-center"
          >
            <img
              src="/WhatsApp Image 2024-12-23 at 07.26.03.jpeg"
              alt="מעור סיבוני המייסד"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100, y: 50 }}
            animate={firstSectionInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 100, y: 50 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="w-full h-60 flex justify-center items-center"
          >
            <img
              src="/WhatsApp Image 2024-12-23 at 07.26.03 (1).jpeg"
              alt="תמונה שנייה"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100, y: 100 }}
            animate={firstSectionInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -100, y: 100 }}
            transition={{ duration: 1, delay: 2 }}
            className="w-full h-60 flex justify-center items-center"
          >
            <img
              src="/WhatsApp Image 2024-12-23 at 07.26.03.jpeg"
              alt="תמונה נוספת"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Next;