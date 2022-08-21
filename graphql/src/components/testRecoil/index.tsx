import React from 'react';
import { useRecoilState } from 'recoil';
import { ITestState, testState } from '../../store/states';


export const TestRecoil = () =>{
  const [test] = useRecoilState<ITestState[]>(testState);
  return (
    <ul>
      {test?.map((test: any, index: number) => <li key={index}>{test.title}</li>)}
    </ul>
  )
}
