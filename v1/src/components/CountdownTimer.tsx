import { useEffect, useState } from 'react';

interface CountdownTimerProps {
  labels: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}

export default function CountdownTimer({ labels }: CountdownTimerProps) {
  // Target deadline: October 30, 2026
  const targetDate = new Date('2026-10-30T00:00:00Z').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isOver: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isOver: false });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeBlocks = [
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.minutes },
    { value: timeLeft.seconds, label: labels.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-2.5 mt-2.5">
      {timeBlocks.map((block, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center py-2.5 px-1.5 rounded-xl bg-slate-900/60 border border-white/10 backdrop-blur-sm shadow-inner transition-all hover:border-kz-sky/30"
        >
          <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight leading-none">
            {String(block.value).padStart(2, '0')}
          </span>
          <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mt-1 font-sans">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}
