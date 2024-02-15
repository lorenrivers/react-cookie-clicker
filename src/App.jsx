import { useState } from "react";
import Timer from "./Components/Timer";
import ResetButton from "./Components/ResetButton";
import CookieButton from "./Components/CookieButton";
import { upgrades } from "./Components/upgrades";
import UpgradeCard from "./Components/UpgradeCard";
import "./App.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [cookiesPerSecond, setCookiesPerSecond] = useState(1);

  return (
    <div>
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

      <ResetButton setCounter={setCounter} />

      <div>
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
