//import { Component } from 'react';
import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  const [reverse, setReverse] = useState(false); //estado e função para setar o estado
  const [count, setCount] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse((reverse) => !reverse);
    setCount((count) => count + 1);
    console.log(count);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />

        <p>Contador: {count}</p>

        <button type="button" onClick={handleClick}>
          Reverse {reverseClass}
        </button>
      </header>
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
