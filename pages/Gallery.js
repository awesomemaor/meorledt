import React, { useEffect } from "react";  // הוספת useEffect
import AOS from "aos";
import "aos/dist/aos.css"; 

function Gallery() {
  // רשימת המדיה: תמונות וסרטונים
  const mediaItems = [
    { type: "image", src: "/gallerypage/image1.jpg" },
    { type: "image", src: "/gallerypage/image2.jpg" },
    { type: "image", src: "/gallerypage/image3.jpg" },
    { type: "image", src: "/gallerypage/image4.jpg" },
    { type: "image", src: "/gallerypage/image5.jpg" },
    { type: "image", src: "/gallerypage/image6.jpg" },
    { type: "image", src: "/gallerypage/image7.jpg" },
    { type: "image", src: "/gallerypage/image8.jpg" },
    { type: "image", src: "/gallerypage/image9.jpg" },
    { type: "image", src: "/gallerypage/image10.jpg" },
    { type: "image", src: "/gallerypage/image11.jpg" },
    { type: "image", src: "/gallerypage/image12.jpg" },
    { type: "image", src: "/gallerypage/image13.jpg" },
    { type: "image", src: "/gallerypage/image14.jpg" },
    { type: "image", src: "/gallerypage/image15.jpg" },
    { type: "image", src: "/gallerypage/image16.png" },
    { type: "image", src: "/gallerypage/image17.png" },
    { type: "image", src: "/gallerypage/image18.png" },
    { type: "image", src: "/gallerypage/image19.png" },
    { type: "image", src: "/gallerypage/image20.jpg" },
    { type: "image", src: "/gallerypage/image21.jpg" },
    { type: "image", src: "/gallerypage/image22.jpg" },
    { type: "image", src: "/gallerypage/image23.jpg" },
    { type: "image", src: "/gallerypage/image24.jpg" },
    { type: "video", src: "/gallerypage/video1.mp4" },
    { type: "video", src: "/gallerypage/video2.mp4" },
    { type: "video", src: "/gallerypage/video3.mp4" },
    { type: "video", src: "/gallerypage/video4.mp4" },
    { type: "video", src: "/gallerypage/video5.mp4" },
    { type: "video", src: "/gallerypage/video6.mp4" },
    { type: "video", src: "/gallerypage/video7.mp4" },
    { type: "video", src: "/gallerypage/video8.mp4" },
    { type: "video", src: "/gallerypage/video9.mp4" },
    { type: "video", src: "/gallerypage/video10.mp4" },
    { type: "video", src: "/gallerypage/video11.mp4" },
    { type: "video", src: "/gallerypage/video12.mp4" },
    { type: "video", src: "/gallerypage/video13.mp4" },
    { type: "video", src: "/gallerypage/video14.mp4" },
    { type: "video", src: "/gallerypage/video15.mp4" },
    { type: "video", src: "/gallerypage/video16.mp4" },
    { type: "video", src: "/gallerypage/video17.mp4" },
    { type: "video", src: "/gallerypage/video18.mp4" },
    { type: "video", src: "/gallerypage/video19.mp4" },
    { type: "video", src: "/gallerypage/video20.mp4" },
    { type: "video", src: "/gallerypage/video21.mp4" },
    { type: "video", src: "/gallerypage/video22.mp4" },
    { type: "video", src: "/gallerypage/video23.mp4" },
    { type: "video", src: "/gallerypage/video24.mp4" },
  ];
  useEffect(() => {
    // אתחול של AOS
    AOS.init({
      duration: 1000, // משך האנימציה
      once: false, // ייתן לבצע את האנימציה כל פעם כשגללים אל האלמנט
    });
  }, []);

  // ערבוב אקראי של הפריטים
  const shuffledItems = mediaItems.sort(() => Math.random() - 0.5);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-700 via-purple-600 to-pink-500 py-16">
      <div className="text-center mb-12">
      <h1
          className="text-6xl text-white font-extrabold tracking-wide drop-shadow-md"
          data-aos="fade-down"
        >
          🌟 גלריית הזכרונות 🌟
        </h1>
        <p className="text-xl text-white mt-4 "
        data-aos="fade-up">
      ״החוויות שכבר שחכנו נזכור ברגעים שתפסנו״
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
        {shuffledItems.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg bg-black ${
              item.type === "video" && Math.random() > 0.85 ? "col-span-2 row-span-2" : ""
            }`}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`media ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
              />
            ) : (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-all duration-500 ease-in-out transform hover:scale-105 hover:opacity-90"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;