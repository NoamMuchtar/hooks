import { useState } from "react";
import "./App.css";
import ColorChange from "./components/ColorChange";
import ColorChangeSep from "./components/ColorChangeSep";
import Home from "./components/Home";
import { Theme, ThemeContext } from "./context/ThemeContext";
import ColorThemeToggle from "./components/ColorThemeToggle";
import Reducer from "./components/Reducer";
import Transition from "./components/transition";

function App() {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      <Transition />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ColorThemeToggle />
        <Home />
        <ColorChange />
        <ColorChangeSep />
      </ThemeContext.Provider>
      <Reducer />
    </>
  );
}

export default App;
