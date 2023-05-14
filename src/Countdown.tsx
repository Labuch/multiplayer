import React, { useEffect, useState } from "react";

const Countdown = () => {
    const [minutes, setMinutes] = useState(4);
    const [secondes, setSecondes] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (secondes > 0) {
          setSecondes(secondes - 1);
        } else {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSecondes(59);
          } else {
            setMinutes(4)
            setSecondes(59);
          }
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [minutes, secondes]);
  
    return (
      <div>
        <h1>Next start</h1>
        <h2>{`${minutes.toString().padStart(2, "0")}:${secondes.toString().padStart(2, "0")}`}</h2>
      </div>
    );
  }
  
  export default Countdown;