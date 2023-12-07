import React, { useState, useEffect } from "react";
import "./style/PointerDegradient.css";

const PointerDegradient = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="light fixed rounded-full pointer-events-none z-0 w-[60px] h-[60px] min-[1400px]:w-[70px] min-[1400px]:h-[70px] min-[2000px]:w-[80px] min-[2000px]:h-[80px]"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    ></div>
  );
};

export default PointerDegradient;
