"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  // State to hold the calculated time left
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State to track whether the component has mounted on the client
  const [hasMounted, setHasMounted] = useState(false);

  // Effect to set hasMounted to true after the initial render on the client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // Effect to calculate and update the countdown every second
  useEffect(() => {
    // Only run this effect on the client
    if (!hasMounted) {
      return;
    }

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    // Set the initial time left
    setTimeLeft(calculateTimeLeft());

    // Set up the interval to update the timer every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [hasMounted, targetDate]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : String(time);
  };
  
  // Render loading skeletons if the component hasn't mounted on the client yet
  // This prevents hydration mismatch errors.
  if (!hasMounted) {
    return (
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
          <div className="text-4xl md:text-6xl font-black text-background">--</div>
          <div className="text-sm md:text-base font-medium text-background/80">DIAS</div>
        </div>
        <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
          <div className="text-4xl md:text-6xl font-black text-background">--</div>
          <div className="text-sm md:text-base font-medium text-background/80">HORAS</div>
        </div>
        <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
          <div className="text-4xl md:text-6xl font-black text-background">--</div>
          <div className="text-sm md:text-base font-medium text-background/80">MINUTOS</div>
        </div>
        <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
          <div className="text-4xl md:text-6xl font-black text-background">--</div>
          <div className="text-sm md:text-base font-medium text-background/80">SEGUNDOS</div>
        </div>
      </div>
    );
  }

  // Render the actual countdown timer once mounted on the client
  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
        <div className="text-4xl md:text-6xl font-black text-background">
          {timeLeft.days}
        </div>
        <div className="text-sm md:text-base font-medium text-background/80">DIAS</div>
      </div>
      <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
        <div className="text-4xl md:text-6xl font-black text-background">
          {formatTime(timeLeft.hours)}
        </div>
        <div className="text-sm md:text-base font-medium text-background/80">HORAS</div>
      </div>
      <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
        <div className="text-4xl md:text-6xl font-black text-background">
          {formatTime(timeLeft.minutes)}
        </div>
        <div className="text-sm md:text-base font-medium text-background/80">MINUTOS</div>
      </div>
      <div className="text-center p-4 md:p-6 bg-primary/80 rounded-lg w-24 md:w-32">
        <div className="text-4xl md:text-6xl font-black text-background">
          {formatTime(timeLeft.seconds)}
        </div>
        <div className="text-sm md:text-base font-medium text-background/80">SEGUNDOS</div>
      </div>
    </div>
  );
};

export { CountdownTimer };
