import { useContext } from "react";
import { ThemeContext } from "./App.jsx";

export default function Context(){
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  return (
    <>
    
    <div style={themeStyles} 
 className="context">Function Theme</div>
    </>
  )
}