//Cria um hook que salva o tema no localStorage
import { useEffect, useState, Dispatch, SetStateAction } from "react";

type Response<T> = [
  T, 
  Dispatch<SetStateAction<T>>
];

function usePersistedState<T>(key: string, initialState: T): Response<T>{
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(key);

    if(storageValue){
      return JSON.parse(storageValue);
    }else{
      return initialState;
    }
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state)) //componentDidMount
  }, [key, state]); //componentUpdate
  return [state, setState]; //unDidMountComponent
}

export default usePersistedState;