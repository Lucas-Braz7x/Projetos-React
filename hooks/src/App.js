import React, { useReducer } from 'react';
//import { Component } from 'react';
/* import P from 'prop-types';*/
/* import { AppContext } from './store/GlobalContext';
import Div from './components/Div/index'; */
import './App.css';
import { globalState } from './store/globalState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda':
      console.log('Data ', action.payload);
      return { ...state, title: 'Mudou' };
    case 'inverter': {
      console.log(action);
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;
  return (
    /* <AppContext>
      <Div></Div>
    </AppContext> */
    <div>
      <h1>{title}</h1>
      <p>{counter}</p>
      <p>{body}</p>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleDateString('pt-br'),
          })
        }
      >
        Mudar
      </button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
    </div>
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
