import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const target = new Date();
    target.setMonth(target.getMonth() + 3);

    const tick = () => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;
      setTime(diff > 0 ? diff : 0);
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((time % (1000 * 60)) / 1000);

  const pad = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="inline-flex gap-6 bg-background/60 backdrop-blur-md rounded-xl px-6 py-4 shadow-lg" dir="rtl">
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{days}</span>
        <span className="text-sm">يوم</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{pad(hours)}</span>
        <span className="text-sm">ساعة</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{pad(minutes)}</span>
        <span className="text-sm">دقيقة</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-4xl font-bold">{pad(seconds)}</span>
        <span className="text-sm">ثانية</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

