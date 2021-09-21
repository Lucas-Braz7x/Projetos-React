import './App.css';
import * as themes from './styles/themes';

import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';
import ThemeContext from './styles/themes/context';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark);
  };

  return (
    <div>

      <ThemeContext.Provider value={currentTheme}>
      <ThemeSwitcher toggleTheme={toggleTheme}/>
        <ThemeContext.Consumer>
          {(theme) => <TodoList theme={theme}/>}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
