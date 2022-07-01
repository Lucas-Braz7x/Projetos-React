import { useEffect, useState } from "react";
import {GetServerSideProps} from 'next';

export default function Home({repositories}) {

  return (
   <ul>
    {repositories.map(repo => (<li key={repo}>{repo}</li>))}
   </ul>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>{
  const response = await fetch("https://api.github.com/users/Lucas-Braz7x/repos");
  const data = await response.json();
  const repositoriesNames = data.map(item => item.name);

  return {
    props: {
      repositories: repositoriesNames
    }
  }

}
