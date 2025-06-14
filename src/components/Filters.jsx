import { useEffect, useState } from "react";
import Filter from "./Filter";
import ModeToggle from "./ModeToggle";
import Search from "./Search";

function Filters() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  const toggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="filters">
      <Search />
      <Filter />
      <ModeToggle mode={mode} toggleMode={toggleMode} />
    </div>
  );
}

export default Filters;
