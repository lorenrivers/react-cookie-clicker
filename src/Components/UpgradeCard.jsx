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
    <div className="upgrade-container">
      <h2>{name}</h2>
      <p>Cost: {cost} cookies</p>
      <p>Increases cookies per second by {cookieValue} cookies</p>
      <button
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
