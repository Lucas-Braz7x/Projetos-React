import React from 'react';
//import { Component } from 'react';
/* import P from 'prop-types';*/
import { useContext, useState } from 'react';
import './App.css';

const globalState = {
  //Equivale ao useState
  title: 'O título que contexto',
  body: 'Seja bem-vindo ao contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

const Div = () => {
  return (
    <div className="app">
      <H1 />
      <P />
    </div>
  );
};
const H1 = () => {
  const context = useContext(GlobalContext);
  const {
    contextState: { title, counter },
  } = context;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
const P = () => {
  const context = useContext(GlobalContext);
  const {
    //Destructing mais avançado, tira um atributo de dentro do objeto
    contextState: { body, counter },
    contextState,
    setContextState,
  } = context;
  return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div></Div>
    </GlobalContext.Provider>
  );
}

/* COMPONENTE DE CLASS COM ESTADO */

/* class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this); //Permite o acesso do this dentro do método

    this.state = {
      reverse: false,
    };
  }

  handleClick() {
    const { reverse } = this.state;
    this.setState({ reverse: !reverse });
  }

  render() {
    const { reverse } = this.state;
    const reverseClass = reverse ? 'reverse' : '';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
          <button type="button" onClick={this.handleClick}>
            Reverse {reverseClass}
          </button>
        </header>
      </div>
    );
  }
} */

export default App;
