import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function IndiaDigitalClock() {
  const [time, setTime] = useState(new Date());

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

    hours = hours % 12 || 12; // 12-hour format

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-dark">
      <div
        className="text-center p-4 rounded"
        style={{
          background: "#111",
          border: "5px solid #333",
          boxShadow: "0 0 20px #000 inset",
        }}
      >
        <h1
          style={{
            fontFamily: "'Courier New', monospace",
            fontSize: "70px",
            color: "#ff3b3b",
            letterSpacing: "5px",
            textShadow: "0 0 10px red, 0 0 20px red",
          }}
        >
          {formatTime()}
        </h1>
        <p className="text-light mt-2">India Standard Time (IST)</p>
      </div>
    </div>
  );
}
