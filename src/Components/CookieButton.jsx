export default function CookieButton({
  counter,
  setCounter,
  cookiesPerSecond,
}) {
  return (
    <button onClick={() => setCounter(counter + cookiesPerSecond)}>🍪</button>
  );
}
