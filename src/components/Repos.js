import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import Header from './Header';
import NavigationTab from './NavigationTab';

import styles from '../styles/components/Repos.module.css';
import stylesHeader from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';
import Head from './Helper/Head';

function Repos() {
  const { data } = useContext(UserContext);
  const { repos_url, public_repos, login } = data;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(repos_url);
      const json = await response.json();
      setRepos(json);
    }
    fetchData();
  }, [repos_url]);

  return (
    <>
      <Head title={`${login} - Repositórios`} />
      <Header id="repos">
        <header className={stylesHeader.repos}>
          <Link to="/profile">
            <img
              style={{ filter: 'invert(1)' }}
              src="../assets/left-arrow.png"
              alt="Voltar"
            />
          </Link>
          <p>{public_repos} repositórios</p>
        </header>
      </Header>
      <ul>
        {repos.map((repo) => (
          <li className={styles.li} key={repo.id}>
            <h4 className={styles.name}>{repo.name}</h4>

            <p className={styles.description}>{repo.description}</p>

            <div className={styles.info}>
              <div className={styles.stars}>
                <img src="../assets/star.png" alt="Estrela" />
                <p>{repo.stargazers_count}</p>
              </div>

              <div className={styles.padlocks}>
                <img src="../assets/padlock_open.svg" alt="Cadeado aberto" />
                <img src="../assets/padlock_lock.svg" alt="Cadeado fechado" />
              </div>
            </div>
          </li>
        ))}
      </ul>
      <NavigationTab />
    </>
  );
}

export default Repos;
