import "./upgradeCard.css";

export default function UpgradeCard({
  name,
  cost,
  cookieValue,
  counter,
  setCounter,
  cookiesPerSecond,
  setCookiesPerSecond,
}) {
  return (
    <div className="upgrade-card">
      <h2 className="h2-name">{name}</h2>
      <p className="p-cost">Cost: {cost} cookies</p>
      <p className="p-cookievalue">
        Increases cookie earnings by {cookieValue}!
      </p>
      <button
        className="upgrade-btn"
        onClick={() => {
          if (counter >= cost) {
            setCounter(counter - cost);
            setCookiesPerSecond(cookiesPerSecond + cookieValue);
          }
        }}
      >
        Buy upgrade!
      </button>
    </div>
  );
}
