import DarkIcon from "./Icons/DarkIcon.jsx";
import LightIcon from "./Icons/LightIcon.jsx";

function ModeToggle({ mode, toggleMode }) {
  return (
    <button className="icon" onClick={toggleMode} aria-label="Toggle Theme">
      {mode === 'light' ? <LightIcon /> : <DarkIcon />}
    </button>
  );
}

export default ModeToggle;
