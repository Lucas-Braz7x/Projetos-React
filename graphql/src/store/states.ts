import {atom} from 'recoil'

export interface ITestState{
  id: string,
  title: string,
  description: string
}

export const testState = atom<ITestState[]>({
  key: "testStates",
  default: [{id: 'hasjdhsahd', title: 'TESTE', description: "Teste descrição"}]
})
