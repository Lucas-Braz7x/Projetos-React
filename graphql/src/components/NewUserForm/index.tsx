import { gql, useMutation } from '@apollo/client';
import { FormEvent, useState } from 'react'
import { GET_USERS } from '../../App';
import { client } from '../../lib/apollo';

const CREATE_USER = gql`
  mutation ($name: String!){
    createUser(name: $name){
      id
      name
    }
  }
`

export const NewUserForm = () =>{

  const [name, setName] = useState("");
  const [createUser, {data, loading, error}] = useMutation(CREATE_USER);

  const handleCreateUser = async (event: FormEvent) =>{
    event.preventDefault();

    if(!name){
      console.log(error)
      return;
    }

    await createUser({
      variables: {
        name,
      },
      //refetchQueries: [GET_USERS]
      update: (cache, {data: {createUser}}) =>{
        const {users} = client.readQuery({query: GET_USERS});

        cache.writeQuery({
          query: GET_USERS,
          data:{
            users:{
              ...users,
              createUser
            }
          }
        })
      }
    })
  }
  return(
      <form method='post' action="" onSubmit={handleCreateUser}>
        <input type="text" onChange={e => setName(e.target.value)}/>
        <button type='submit'>Enviar</button>
      </form>
  )
}
