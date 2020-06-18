import React, {useState, useEffect, FormEvent} from 'react';
import { FiChevronRight} from 'react-icons/fi'
import {Link} from 'react-router-dom';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories, Error } from './styles';

interface Repository{
  full_name: string;
  description:string;
  owner: {
    login: string;
    avatar_url: string;
  };

}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    if(storagedRepositories){
      return JSON.parse(storagedRepositories); // Aqui faz com que fique salvo com o f5
    }
    else{
      return [];
    }
  });



  // UseEffet -> sempre que haver mudança na variavel repositories, salve sempre no localStorage
  // Para não haver conflito com os localhost:3000 porque são compartilhados, o setItem colocamos @Nome:o que quer
  useEffect(() => {
    localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories),
    );
  }, [repositories]);

  // FUnção para adicionar repositorio

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
    ): Promise<void>{
      event.preventDefault(); // Previne o comportamento padrão


    //Verificar se o input está vazio
    if(!newRepo){
      setInputError('Digite o autor/nome do repositorio');
      return;
    }

    try{
    const response = await api.get<Repository>(`repos/${newRepo}`);

    //console.log(response.data);
    const repository = response.data;


    setRepositories([...repositories, repository]);
    setNewRepo(''); // LImpando o input
    setInputError(''); //Limpando o error

    }catch (err){
      setInputError('Error na busca por esse repositório');
    }

  }

    return (
    <>
    <img src={logoImg} alt="GitHub Explorer" />
    <Title>Explore repositórios no Github</Title>


    <Form hasError={!!inputError} onSubmit={handleAddRepository}>

      <input value={newRepo}
      onChange={(e) => setNewRepo(e.target.value)} //
      placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>

    {inputError && <Error>{inputError}</Error>}

    <Repositories>
     {repositories.map(repository => (
        <Link key={repository.full_name} to={`/repositories/${repository.full_name}`}>
        <img src={repository.owner.avatar_url}
        alt={repository.owner.login}/>
        <div>
     <strong>{repository.full_name}</strong>
     <p>{repository.description}</p>

        </div>
        <FiChevronRight size={20} />
        </Link>
     ))}




    </Repositories>
  </>
  )
};

export default Dashboard;
