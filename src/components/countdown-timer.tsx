"use client";

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
}

const CountdownSkeleton = () => (
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

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
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

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // This effect runs only on the client, after the component has mounted.
    setIsMounted(true);
    
    // Set initial time on mount
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : String(time);
  };
  
  if (!isMounted) {
    return <CountdownSkeleton />;
  }

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
