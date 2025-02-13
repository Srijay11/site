import React, { useState, useEffect } from "react";

const lovePhrases = [
  "I love you", "Be mine", "Forever yours", "You complete me", "XOXO",
  "My heart is yours", "Love you always", "Hugs & Kisses", "You're my everything",
  "Endless love", "Together forever", "Sweetheart", "My soulmate", "Adore you"
];

const HeartShapeText = () => {
  const [visiblePhrases, setVisiblePhrases] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisiblePhrases(prev => {
        if (prev.length < lovePhrases.length) {
          return [...prev, lovePhrases[prev.length]];
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex justify-center items-center h-screen bg-pink-200">
      <div className="absolute text-4xl font-bold text-red-600">
        Happy Valentine's Day!
      </div>
      {visiblePhrases.map((phrase, index) => {
        const angle = (index / lovePhrases.length) * 2 * Math.PI;
        const x = 120 * Math.cos(angle);
        const y = 120 * Math.sin(angle);
        return (
          <div
            key={index}
            className="absolute text-red-500 text-lg font-semibold"
            style={{
              transform: `translate(${x}px, ${y}px)`,
              transition: "all 0.5s ease-in-out"
            }}
          >
            {phrase}
          </div>
        );
      })}
    </div>
  );
};

export default HeartShapeText;
