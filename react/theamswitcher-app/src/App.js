import React from 'react'
import Form from './Component/Form';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);
function App() {
    const [theme, setTheme] = useState('dark')

    // eslint-disable-next-line no-unused-vars
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
          <div className='App' id={theme}>
      <Form/>
      <div className='switch'>
      <ReactSwitch/>
      </div>
    </div>
    </ThemeContext.Provider>

  );
}

export default App