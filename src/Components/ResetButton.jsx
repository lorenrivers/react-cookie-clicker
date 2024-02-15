import "./resetButton.css";

export default function ResetButton({ setCounter, setCookiesPerSecond }) {
  return (
    <div>
      <a
        href="#"
        className="reset-btn"
        onClick={() => {
          setCounter(0);
          setCookiesPerSecond(1);
        }}
      >
        Reset
      </a>
    </div>
  );
}
