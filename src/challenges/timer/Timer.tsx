import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";

function Timer() {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0) {
                    return 59;
                }
                return prevSeconds - 1;
            });

            setMinutes((prevMinutes) => {
                if (minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return 0;
                }
                if (seconds === 0) {
                    return prevMinutes - 1;
                }
                return prevMinutes;
            });
        }, 1000);

        return () => clearInterval(interval);
    }
}, [isActive, seconds]); 

  const handleTimer = () => setIsActive(!isActive);

  return (
    <div className={styles.timerContainer}>
      <h2 className={styles.timerTitle}>Beautiful Timer</h2>
      <div className={styles.timerCircle}>
        <h3 className={styles.timerDisplay}>
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </h3>
      </div>
      <button onClick={handleTimer} className={styles.timerButton}>
        {isActive ? "Stop" : "Start"}
      </button>
    </div>
  );
}

export default Timer;