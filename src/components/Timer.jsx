import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  let interval = useRef(); //store the timing because its mutable(manipulatable)

  const startTimer = () => {
    const countDownDate = new Date("July 1,2024 00:00:00").getTime(); // this is where our time will start counting from
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        //stop our timer
        clearInterval(interval.current);
      } else {
        // update our timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSecs(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);
  return (
    <div className="flex items-start justify-start font-inter text-center">
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Days</small>
        </p>
        <p className="font-bold text-[32px]">{timerDays}</p>
      </div>
      <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-5 px-3">
        :
      </span>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Hours</small>
        </p>
        <p className="font-bold text-[32px]">{timerHours}</p>
      </div>
      <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-5 px-3">
        :
      </span>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Minutes</small>
        </p>
        <p className="font-bold text-[32px]">{timerMinutes}</p>
      </div>
      <span className="text-[#FF8933] text-3xl flex justify-center items-center pt-5 px-3">
        :
      </span>
      <div className="flex flex-col items-center">
        <p className="font-medium text-[12px]">
          <small>Seconds</small>
        </p>
        <p className="font-bold text-[32px]">{timerSecs}</p>
      </div>
    </div>
  );
};

export default Timer;
