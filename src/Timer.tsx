import React, { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Timer</h1>
      <h2>{formattedTime}</h2>
    </div>
  );
}

export default Timer;