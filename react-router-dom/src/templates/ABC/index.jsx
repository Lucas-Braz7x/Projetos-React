import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router';

export const Abc = () => {
  //Hook do react-router-dom
  //Para acessar os parâmetros da url
  const params = useParams();
  const location = useLocation();
  const history = useNavigate();
  console.log('params', params);
  console.log('location', location);
  console.log('history', history);

  useEffect(() => {
    setTimeout(() => {
      history('/');
    }, 5000);
  }, [history]);

  return (
    <div>
      <h1>Nois</h1>
    </div>
  );
};
