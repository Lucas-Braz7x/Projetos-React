import React from 'react';

import usePersistedState from './utils/usePersistedState';

import GlobalStyled from './styles/global';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import Header from './components/Header';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light); 
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyled />
        <Header toggleTheme={toggleTheme}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
