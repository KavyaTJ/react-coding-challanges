import React, { useEffect, useState } from 'react'

function Timer() {
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

     useEffect(() => {
        if(isActive){
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
                if (prevSeconds === 0) {
                    return setMinutes(prevMinutes => {
                        if (prevMinutes === 0) {
                            clearInterval(interval);
                            return 0;
                        }
                        return prevMinutes - 1;
                    }), 59;
                }
                return prevSeconds - 1;
            });
            
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }
    }
    ,[isActive,minutes]);

    
    const handleTimer = () => setIsActive(!isActive);
  return (
    <div>
        <h2>Timer</h2>
        <h3>{minutes}:{seconds}</h3>
        <button onClick={handleTimer}>{isActive? 'stop':'start'}</button>
    </div>
  )
}

export default Timer
