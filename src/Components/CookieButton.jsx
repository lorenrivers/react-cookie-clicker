import "./cookieButton.css";

export default function CookieButton({
  counter,
  setCounter,
  cookiesPerSecond,
}) {
  return (
    <button
      onClick={() => setCounter(counter + cookiesPerSecond)}
      className="cookie-btn"
    >
      🍪
    </button>
  );
}
