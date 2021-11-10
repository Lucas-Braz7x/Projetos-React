/* import { useContext } from 'react';
import { GlobalContext } from '../../store/GlobalContext';

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

export default P;
 */
