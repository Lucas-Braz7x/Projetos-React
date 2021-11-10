import React, { useReducer } from 'react';
import { globalState } from './globalState';
import P from 'prop-types';

//Contexto para importar nos componentes
export const GlobalContext = React.createContext();

//Reducer
export const reducer = (contextState, action) => {
  switch (action.type) {
    case 'CHANGE_TITLE': {
      return { ...contextState, title: action.payload };
    }
  }

  return { ...contextState };
};

//Padronização das actions
const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//Para importar no app para envolver os componentes que irão utilizar o contexto
export const AppContext = ({ children }) => {
  const [contextState, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload: payload });
  };

  return <GlobalContext.Provider value={{ contextState, changeTitle }}>{children}</GlobalContext.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};
