import { useState } from "react";
import Timer from "./Components/Timer";
import ResetButton from "./Components/ResetButton";
import CookieButton from "./Components/CookieButton";
import { upgrades } from "./Components/upgrades";
import UpgradeCard from "./Components/UpgradeCard";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(
    parseInt(localStorage.getItem("cookies")) || 0
  );
  const [cookiesPerSecond, setCookiesPerSecond] = useState(
    parseInt(localStorage.getItem("cookiesPerSecond")) || 1
  );

  return (
    <div>
      <div className="top-container">
        <h1>Cookie Clicker</h1>
        <Timer
          counter={counter}
          setCounter={setCounter}
          cookiesPerSecond={cookiesPerSecond}
        />

        <CookieButton
          counter={counter}
          setCounter={setCounter}
          cookiesPerSecond={cookiesPerSecond}
        />

        <ResetButton
          setCounter={setCounter}
          setCookiesPerSecond={setCookiesPerSecond}
        />
      </div>

      <div className="upgrade-container">
        {upgrades.map((upgrade) => (
          <UpgradeCard
            key={upgrade.id}
            name={upgrade.name}
            cost={upgrade.cost}
            cookieValue={upgrade.cookieValue}
            counter={counter}
            setCounter={setCounter}
            cookiesPerSecond={cookiesPerSecond}
            setCookiesPerSecond={setCookiesPerSecond}
          />
        ))}
      </div>
    </div>
  );
}
