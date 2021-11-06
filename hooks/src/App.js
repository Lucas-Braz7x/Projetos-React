import React from 'react';
//import { Component } from 'react';
/* import P from 'prop-types';*/
import { AppContext } from './store/GlobalContext';
import Div from './components/Div/index';
import './App.css';

function App() {
  return (
    <AppContext>
      <Div></Div>
    </AppContext>
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
