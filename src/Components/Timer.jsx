import { useEffect } from "react";
import "./timer.css";

export default function Timer({ counter, setCounter, cookiesPerSecond }) {
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((previousCounter) => previousCounter + cookiesPerSecond);
    }, 1000);

    localStorage.setItem("cookies", counter.toString());
    localStorage.setItem("cookiesPerSecond", cookiesPerSecond.toString());

    return () => {
      clearInterval(interval);
    };
  }, [counter, cookiesPerSecond]);

  return (
    <div className="timer">
      <p>Number of Cookies Earned: {counter}</p>
      <p>{cookiesPerSecond} cookie(s) per second</p>
    </div>
  );
}
