import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { NewUserForm } from './components/NewUserForm';
import { ITestState, testState } from './store/states';

interface IUser{
  id: string,
  name: string
}
export const GET_USERS = gql`
  query{
    users{
      id,
      name
    }
  }
`;

function App() {
  const { data, loading } = useQuery<{users: IUser[]}>(GET_USERS);
  const [, setTest] = useRecoilState<ITestState[]>(testState);

  const handleTest = (): void =>{
    setTest(state => [...state, {id: 'yteyreuy', title: 'Mudança', description:"Commit"}] )
  }


  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <ul>
        {data?.users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
      <NewUserForm />
      <button onClick={handleTest}>TESTE</button>
    </>
  );
}

export default App;
