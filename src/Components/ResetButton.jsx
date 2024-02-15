export default function ResetButton({ setCounter }) {
  return (
    <div>
      <a href="#" className="reset-btn" onClick={() => setCounter(0)}>
        Reset
      </a>
    </div>
  );
}
