import {
  FiHome,
  FiCalendar,
  FiImage,
  FiCoffee,
  FiFileText,
  FiPhone,
  FiChevronDown,
} from "react-icons/fi";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* כפתור "תפריט" */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-0"
      >
        <span className="font-medium text-sm">תפריט</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FiChevronDown />
        </motion.span>
      </button>

      {/* תפריט שמכסה את החלק המרכזי של המסך */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-purple-700 bg-opacity-90 flex items-center justify-center"
        >
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 p-6 rounded-lg shadow-xl w-[80%] max-w-[600px] mx-auto bg-cover bg-center"
            style={{
              backgroundImage: "url('/menuface.png')", // נתיב התמונה שלך
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundBlendMode: "overlay", // משלב את התמונה עם הרקע בצורה טובה יותר
              backgroundColor: "rgba(0, 0, 10, 0.2)",
            }}
          >
            <Link href="/">
              <Option setOpen={setOpen} Icon={FiHome} text="דף הבית" />
            </Link>
            <Link href="#next">
              <Option setOpen={setOpen} Icon={FiCalendar} text="מעורלדת 2025" />
            </Link>
            <Link href="#gallery">
              <Option setOpen={setOpen} Icon={FiImage} text="גלריית זכרונות" />
            </Link>
            <Link href="#alcohol">
              <Option setOpen={setOpen} Icon={FiCoffee} text="עמוד האלכוהול" />
            </Link>
            <Link href="#team">
              <Option setOpen={setOpen} Icon={FiFileText} text="חדשות הבידור" />
            </Link>
            <Link href="#contact">
              <Option setOpen={setOpen} Icon={FiPhone} text="צור קשר" />
            </Link>
          </motion.div>

          {/* כפתור סגירה */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            ✖
          </button>
        </motion.div>
      )}
    </div>
  );
};

const Option = ({ text, Icon, setOpen }) => {
  return (
    <motion.li
      onClick={() => setOpen(false)}
      className="flex items-center justify-center gap-4 w-full p-4 text-lg font-medium whitespace-nowrap text-white hover:text-purple-200 cursor-pointer bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 rounded-md shadow-xl transform hover:scale-105 transition-all"
    >
      <Icon className="text-2xl" />
      <span className="text-center">{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;