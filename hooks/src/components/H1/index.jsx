import { useContext, useRef } from 'react';
import { GlobalContext } from '../../store/GlobalContext';

export const H1 = () => {
  const context = useContext(GlobalContext);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.contextState.title}</h1>
      <input type="text" ref={inputRef} />
    </>
  );
};
