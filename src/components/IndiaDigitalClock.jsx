import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Premium Curated Color Palettes
const PALETTES = {
  classicRed: {
    name: "Classic Digital",
    bg: "#111111",
    text: "#ff3b3b",
    textShadow: "rgba(255, 59, 59, 0.6)",
    border: "#333333",
    boxShadow: "rgba(0, 0, 0, 0.8)",
    labelColor: "text-light",
  },
  cyberpunk: {
    name: "Cyberpunk Neon",
    bg: "#120458",
    text: "#ff00e6",
    textShadow: "rgba(255, 0, 230, 0.8)",
    border: "#5c10b8",
    boxShadow: "rgba(24, 6, 82, 0.9)",
    labelColor: "text-light",
  },
  matrix: {
    name: "Matrix Terminal",
    bg: "#0d1117",
    text: "#00ff41",
    textShadow: "rgba(0, 255, 65, 0.6)",
    border: "#003b00",
    boxShadow: "rgba(0, 0, 0, 0.9)",
    labelColor: "text-light",
  },
  oceanic: {
    name: "Deep Ocean",
    bg: "#020617",
    text: "#38bdf8",
    textShadow: "rgba(56, 189, 248, 0.6)",
    border: "#1e293b",
    boxShadow: "rgba(2, 6, 23, 0.9)",
    labelColor: "text-light",
  },
  sunset: {
    name: "Vaporwave Sunset",
    bg: "#2a0a18",
    text: "#ff9e00",
    textShadow: "rgba(255, 158, 0, 0.7)",
    border: "#72103f",
    boxShadow: "rgba(26, 6, 15, 0.9)",
    labelColor: "text-light",
  },
  minimalLight: {
    name: "Minimal Light",
    bg: "#f8fafc",
    text: "#0f172a",
    textShadow: "rgba(15, 23, 42, 0.15)",
    border: "#cbd5e1",
    boxShadow: "rgba(203, 213, 225, 0.4)",
    labelColor: "text-dark",
  },
};

export default function IndiaDigitalClock() {
  const [time, setTime] = useState(new Date());
  const [activeTheme, setActiveTheme] = useState("classicRed");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
      );
      setTime(istTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    hours = hours % 24 || 24; // 12-hour format

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  const currentPalette = PALETTES[activeTheme];

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center bg-dark py-4 mx-auto mt-3 rounded shadow-lg"
      style={{
        minHeight: "15vh",
        width: "fit-content",
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <div className="mb-4 d-flex align-items-center px-3 py-2 bg-black rounded border border-secondary shadow-sm">
        <label htmlFor="palette-selector" className="text-white me-3 fw-bold mb-0">
          Color Palette:
        </label>
        <select
          id="palette-selector"
          className="form-select form-select-sm bg-dark text-white border-secondary cursor-pointer"
          style={{ width: "180px" }}
          value={activeTheme}
          onChange={(e) => setActiveTheme(e.target.value)}
        >
          {Object.entries(PALETTES).map(([key, palette]) => (
            <option key={key} value={key}>
              {palette.name}
            </option>
          ))}
        </select>
      </div>

      <div
        className="text-center p-4 rounded-4"
        style={{
          background: currentPalette.bg,
          border: `5px solid ${currentPalette.border}`,
          boxShadow: `0 0 25px ${currentPalette.boxShadow} inset, 0 8px 15px rgba(0,0,0,0.4)`,
          minWidth: "350px",
          transition: "all 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)",
        }}
      >
        <h1
          className="fw-bold"
          style={{
            fontFamily: "'Courier New', Courier, monospace",
            fontSize: "52px",
            color: currentPalette.text,
            letterSpacing: "4px",
            textShadow: `0 0 10px ${currentPalette.textShadow}, 0 0 20px ${currentPalette.textShadow}`,
            transition: "color 0.5s ease, text-shadow 0.5s ease",
            marginBottom: "0",
          }}
        >
          {formatTime()}
        </h1>
        <p 
          className="mt-2 mb-0 fw-bold" 
          style={{ 
            color: currentPalette.text,
            transition: "color 0.5s ease",
            opacity: 0.8,
            letterSpacing: "1px",
          }}
        >
          India Standard Time (IST)
        </p>
      </div>
    </div>
  );
}
