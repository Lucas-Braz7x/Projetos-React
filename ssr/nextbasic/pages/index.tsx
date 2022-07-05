import { useEffect, useState } from "react";
import {GetStaticProps} from 'next';

export default function Home({repositories, date}) {

  return (
    <>
    <h1>{date}</h1>
   <ul>
    {repositories.map(repo => (<li key={repo}>{repo}</li>))}
   </ul>
    </>
  )
}

/* EXEMPLO DE SSR
export const getServerSideProps: GetServerSideProps = async () =>{
  const response = await fetch("https://api.github.com/users/Lucas-Braz7x/repos");
  const data = await response.json();
  const repositoriesNames = data.map(item => item.name);

  return {
    props: {
      repositories: repositoriesNames,
      date: new Date().toISOString(),
    }
  }

}
 */

export const getStaticProps: GetStaticProps = async () =>{
  const response = await fetch("https://api.github.com/users/Lucas-Braz7x/repos");
  const data = await response.json();
  const repositoriesNames = data.map(item => item.name);

  return {
    props: {
      repositories: repositoriesNames,
      date: new Date().toISOString(),
    },
    revalidate: 5
  }

}
