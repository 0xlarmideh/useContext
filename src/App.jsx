import './App.css'
import Context from "./context.jsx";
import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme(prevTheme => !prevTheme)
  }
  return (
    <main>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Context />
      </ThemeContext.Provider>
    </main>
  )
}
