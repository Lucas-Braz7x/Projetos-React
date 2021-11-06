import React, { useState } from 'react';
import { globalState } from './globalState';

//Contexto para importar nos componentes
export const GlobalContext = React.createContext();

//Para importar no app para envolver os componentes que irão utilizar o contexto
//eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [contextState, setContextState] = useState(globalState);
  return <GlobalContext.Provider value={{ contextState, setContextState }}>{children}</GlobalContext.Provider>;
};
