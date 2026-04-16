import React, { useEffect, useState } from "react";

const DigitalWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-GB", { hour12: false }).padStart(8, "0");
  };

  return (
    <div className="watch-container">
      <div className="display">{formatTime(time)}</div>
      <div className="labels">
        <span>ALM</span>
        <span>SIG</span>
      </div>
    </div>
  );
};

export default DigitalWatch;
