import React, { useState } from "react";
import AlcoholCalc from "../comp/alcoholcac";

// קומפוננטת Modal
const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-purple-800 p-6 rounded-lg shadow-lg w-96 relative text-center">
        <button
          className="absolute top-2 right-2 text-white font-bold text-xl"
          onClick={onClose}
        >
          ✖
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
};

const AlcoholInfoPage = () => {
  const drinksInfo = [
    {
      name: "וודקה",
      description: "משקה אלכוהולי חזק שמקורו ברוסיה.",
      abvRange: "40%-50%",
      imageUrl: "/alcophotos/vodka.jpg",
      brands: [
        { name: "אבסולוט", abv: 40, description: "וודקה שוודית פופולרית." },
        { name: "פינלנדיה", abv: 40, description: "וודקה איכותית מפינלנד." },
        { name: "בלוגה", abv: 40, description: "וודקה רוסית יוקרתית." },
        { name: "סטולי", abv: 40, description: "וודקה רוסית קלאסית." },
      ],
    },
    {
      name: "וויסקי",
      description: "משקה אלכוהולי יוקרתי שמיוצר מדגנים.",
      abvRange: "40%-45%",
      imageUrl: "/alcophotos/wishky.webp",
      brands: [
        { name: "ג'וני ווקר", abv: 40, description: "וויסקי סקוטי מוכר." },
        { name: "ג'יימסון", abv: 40, description: "וויסקי אירי פופולרי." },
        { name: "מקאלן", abv: 43, description: "וויסקי סינגל מאלט יוקרתי." },
        { name: "ג'ק דניאלס", abv: 40, description: "וויסקי טנסי קלאסי." },
      ],
    },
    {
      name: "יין",
      description: "משקה קל המיוצר מענבים מותססים.",
      abvRange: "10%-14%",
      imageUrl: "/alcophotos/wine.jpg",
      brands: [
        { name: "קברנה סוביניון", abv: 13, description: "יין אדום יבש פופולרי." },
        { name: "מרלו", abv: 13.5, description: "יין אדום רך ומעודן." },
        { name: "שרדונה", abv: 12.5, description: "יין לבן קלאסי." },
        { name: "רוזה", abv: 12, description: "יין קליל ומרענן." },
      ],
    },
    {
      name: "בירה",
      description: "משקה אלכוהולי פופולרי שמתאים לכל אירוע.",
      abvRange: "5%-7%",
      imageUrl: "/alcophotos/beer.jpg",
      brands: [
        { name: "גולדסטאר", abv: 5, description: "בירה כהה ישראלית." },
        { name: "מכבי", abv: 5, description: "בירה ישראלית קלאסית." },
        { name: "הייניקן", abv: 5, description: "בירה לאגר מהולנד." },
        { name: "קרלסברג", abv: 5, description: "בירה פופולרית מדנמרק." },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const openModal = (index) => setOpenIndex(index);
  const closeModal = () => setOpenIndex(null);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed text-white text-center">
      {/* כותרת */}
      <header className="bg-gradient-to-r bg-cover bg-center bg-no-repeat max-w-7xl  h-45 text-white  py-12"
       style={{
        backgroundImage: `url('alcophotos/alcoback.jpg')`,
      }}>
        
        <h1 className="text-5xl font-extrabold drop-shadow-md">עולם האלכוהול</h1>
        <p className="mt-4 text-lg font-medium">
          כל מה שצריך לדעת על סוגי משקאות
        </p>
      </header>

      {/* סרטון למעלה */}
      <section className="max-w-7xl mx-auto py-12 px-6">
    <div className="max-w-3xl mx-auto mb-12">
    <video
      className="w-full rounded-lg shadow-lg"
      autoPlay
      loop
      muted
      playsInline
      src="/alcophotos/alcovideo.mp4"
    />
    </div>
    </section>

      {/* מידע על משקאות */}
      <section className="max-w-7xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-10 underline decoration-pink-400 text-center">
          סוגי משקאות
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {drinksInfo.map((drink, index) => (
            <div
              key={index}
              className="relative bg-purple-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
              style={{
                backgroundImage: `url(${drink.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            >
              <div className="p-6 text-center z-10 relative">
                <h3 className="text-xl font-bold mb-2">{drink.name}</h3>
                <p className="text-gray-300 mb-2">{drink.description}</p>
                <p className="font-medium text-gray-200 mb-4">
                  אומדן אחוזי אלכוהול: {drink.abvRange}
                </p>
                <button
                  className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
                  onClick={() => openModal(index)}
                >
                  פרטים נוספים
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* חלון Modal */}
      <Modal isOpen={openIndex !== null} onClose={closeModal}>
        {openIndex !== null && (
          <>
            <h3 className="text-xl font-bold mb-4 text-center">
              {drinksInfo[openIndex].name}
            </h3>
            <p className="mb-4 text-center">{drinksInfo[openIndex].description}</p>
            <p className="mb-4 text-center">
              אומדן אחוזי אלכוהול: {drinksInfo[openIndex].abvRange}
            </p>
            {drinksInfo[openIndex].brands.map((brand, i) => (
              <div key={i} className="mb-4 text-center">
                <p className="font-bold text-lg">{brand.name}</p>
                <p className="text-gray-300 text-sm">{brand.description}</p>
                <p className="text-gray-400 text-sm">
                  אחוז אלכוהול: {brand.abv}%
                </p>
              </div>
            ))}
          </>
        )}
      </Modal>

      {/* מחשבון אלכוהול */}
      <section className="max-w-5xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8 underline decoration-yellow-500">
          מחשבון האלכוהול שלך
        </h2>
        <AlcoholCalc />
      </section>

      {/* טיפים לשתייה נכונה */}
      <section className="max-w-7xl mx-auto py-12 px-6 bg-purple-700 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 underline decoration-blue-400 text-center">
          טיפים לשתייה נכונה
        </h2>
        <ul className="list-inside space-y-4 text-lg text-center">
          <li>🍷 תמיד לאכול לפני השתייה כדי להקל על הגוף</li>
          <li>💧 שתו מים בין משקאות כדי להימנע מהתייבשות</li>
          <li>🚫 הימנעו משתייה מוגזמת וזכרו לשתות באחריות</li>
          <li>🚗 לעולם אל תנהגו לאחר שתייה</li>
        </ul>
      </section>
    </div>
  );
};

export default AlcoholInfoPage;