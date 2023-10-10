import React, { useState, useEffect } from "react";

type IProps = {
  seconds: number;
  onTimerUpText?: string;
};

const Timer: React.FunctionComponent<IProps> = ({ seconds, onTimerUpText }) => {
  const [minutes, setMinutes] = useState<number>(0);
  const [sec, setSec] = useState<number>(seconds);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (sec > 0) {
        setSec((prevSec) => prevSec - 1);
      }

      if (sec === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes((prevMinute) => prevMinute - 1);
          setSec(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <span className="timer-text">
      {minutes === 0 && sec === 0
        ? onTimerUpText
          ? onTimerUpText
          : "Refreshing"
        : `${sec} seconds`}
    </span>
  );
};

export default Timer;
