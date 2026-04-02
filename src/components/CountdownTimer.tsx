import { useState, useEffect } from "react";

interface Props {
  targetDate: string;
}

const CountdownTimer = ({ targetDate }: Props) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3 md:gap-6 justify-center">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center px-4 py-3 md:px-6 md:py-4 rounded-xl neon-border border bg-card/50 backdrop-blur-sm min-w-[70px] md:min-w-[90px]"
        >
          <span className="font-display text-2xl md:text-4xl font-bold text-primary">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="font-body text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

function getTimeLeft(target: string) {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export default CountdownTimer;
