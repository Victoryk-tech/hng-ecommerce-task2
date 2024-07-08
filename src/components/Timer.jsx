import React, { useEffect, useRef, useState } from "react";

const COUNTDOWN_TARGET = new Date("June 10,2024 00:00:00");
const getTimeLeft = () => {
  const totalTimeLeft = COUNTDOWN_TARGET - new Date();
  const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((totalTimeLeft / 1000) % 60);
  return { days, hours, minutes, seconds };
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="flex items-start justify-start font-inter text-center">
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Days</small>
        </p>
        <p className="font-bold text-[24px] lg:text-[32px]">{timeLeft.days}</p>
      </div>
      <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-3 lg:pt-5 px-3">
        :
      </span>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Hours</small>
        </p>
        <p className="font-bold text-[24px] lg:text-[32px]">{timeLeft.hours}</p>
      </div>
      <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-3 lg:pt-5 px-3">
        :
      </span>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Minutes</small>
        </p>
        <p className="font-bold text-[24px] lg:text-[32px]">
          {timeLeft.minutes}
        </p>
      </div>
      <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-3 lg:pt-5 px-3">
        :
      </span>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Seconds</small>
        </p>
        <p className="font-bold text-[24px] lg:text-[32px]">
          {timeLeft.seconds}
        </p>
      </div>
    </div>
  );
};

export default Timer;
