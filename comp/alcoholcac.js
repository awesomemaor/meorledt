import React, { useState } from "react";

const AlcoholCalc = () => {
  const [weight, setWeight] = useState(""); // משקל בקילוגרמים
  const [gender, setGender] = useState("male"); // מין (גבר או אישה)
  const [hours, setHours] = useState(""); // שעות שעברו משתייה
  const [drinks, setDrinks] = useState([{ volume: "", abv: "" }]); // רשימת משקאות
  const [bac, setBac] = useState(null); // רמת האלכוהול בדם
  const [message, setMessage] = useState(""); // הודעה למשתמש (מותר או אסור לנהוג)

  // הוספת משקה נוסף
  const addDrink = () => {
    setDrinks([...drinks, { volume: "", abv: "" }]);
  };

  // עדכון משקה מסוים
  const updateDrink = (index, field, value) => {
    const updatedDrinks = drinks.map((drink, i) =>
      i === index ? { ...drink, [field]: value } : drink
    );
    setDrinks(updatedDrinks);
  };

  // חישוב רמת האלכוהול בדם
  const calculateBAC = () => {
    const widmarkFactor = gender === "male" ? 0.68 : 0.55; // פקטור לפי מין
    let totalAlcohol = 0;

    // חישוב כמות האלכוהול מכל המשקאות
    drinks.forEach((drink) => {
      const volumeInLiters = parseFloat(drink.volume) / 1000 || 0; // נפח בליטרים
      const abvPercentage = parseFloat(drink.abv) || 0; // אחוז אלכוהול
      totalAlcohol += volumeInLiters * (abvPercentage / 100) * 789; // 789 זה הצפיפות של אלכוהול בגרם/ליטר
    });

    const bodyWater = parseFloat(weight) * widmarkFactor; // כמות נוזלים בגוף
    const rawBAC = totalAlcohol / bodyWater - 0.015 * parseFloat(hours || 0); // חישוב BAC
    const finalBAC = Math.max(rawBAC, 0).toFixed(3); // הגבלת התוצאה ל-0 לפחות

    setBac(finalBAC);

    if (finalBAC < 0.05) {
      setMessage("מותר לך לנהוג.");
    } else {
      setMessage("אסור לך לנהוג.");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 rounded-lg shadow-lg text-white max-w-xl mx-auto">
      <h2 className="text-3xl font-extrabold mb-4 text-center text-yellow-300 underline">
        מחשבון אלכוהול
      </h2>
      <div className="space-y-6">
        {/* משקל */}
        <div>
          <label className="block mb-2 font-medium text-yellow-100">
            משקל (בק"ג):
          </label>
          <input
            type="number"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        {/* מין */}
        <div>
          <label className="block mb-2 font-medium text-yellow-100">מין:</label>
          <select
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="male">גבר</option>
            <option value="female">אישה</option>
          </select>
        </div>
        {/* שעות */}
        <div>
          <label className="block mb-2 font-medium text-yellow-100">
            שעות שעברו משתייה:
          </label>
          <input
            type="number"
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
          />
        </div>
        {/* משקאות */}
        <div>
          <label className="block mb-2 font-medium text-yellow-100">
            משקאות:
          </label>
          {drinks.map((drink, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="number"
                placeholder="נפח (מ״ל)"
                className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                value={drink.volume}
                onChange={(e) => updateDrink(index, "volume", e.target.value)}
              />
              <input
                type="number"
                placeholder="אחוז אלכוהול"
                className="w-1/2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-300 text-black"
                value={drink.abv}
                onChange={(e) => updateDrink(index, "abv", e.target.value)}
              />
            </div>
          ))}
          <button
            onClick={addDrink}
            className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md transition-colors"
          >
            הוסף משקה נוסף
          </button>
        </div>
        {/* כפתור חישוב */}
        <button
          onClick={calculateBAC}
          className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          חשב BAC
        </button>
      </div>
      {/* תוצאה */}
      {bac !== null && (
        <div className="mt-6 p-4 bg-white text-black rounded-lg shadow">
          <p className="text-lg font-bold text-red-600">
            רמת אלכוהול בדם: {bac}
          </p>
          <p
            className={`text-md mt-2 ${
              bac < 0.05 ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default AlcoholCalc;