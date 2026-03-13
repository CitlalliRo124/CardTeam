import TeamSection from "./components/TeamSection";
import { useState } from "react";

function App() {

  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : "light"}>

     <button 
  className="theme-btn"
  onClick={() => setDarkMode(!darkMode)}
>
  <img
    src="/images/moon.svg"
    alt="toggle theme"
  />
</button>
      <TeamSection />

    </div>
  );
}

export default App;
