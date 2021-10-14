//import { Component } from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  //ComponentDidMount - Executa uma vez
  useEffect(() => {
    console.log('ComponentDidMount');
  }, []);
  //ComponentDidUpdate - A cada atualização
  useEffect(() => {
    console.log('Atualizando');
  });

  //Com Dependências - Executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Atualizando com Dependência', count);

    //Papel do componentWillUmount - Limpeza
    /* return () => {

    }; */
  }, [count]);

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="App">
      <h1>Contador: {count}</h1>

      <button type="button" onClick={handleClick}>
        +
      </button>
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
