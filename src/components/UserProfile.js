import React, { useContext, useEffect, useState } from 'react';
import Header from './Header';

import styles from '../styles/components/Profile.module.css';
import styleHeader from '../styles/components/Header.module.css';
import { Link, useParams } from 'react-router-dom';
import NavigationTab from './NavigationTab';
import { UserContext } from '../UserContext';

function UserProfile() {
  const [data, setData] = useState(null);
  const { userLogin } = useContext(UserContext);

  const params = useParams();
  const { username } = params;

  useEffect(() => {
    async function fetchData(username) {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    }
    fetchData(username);
  }, [username]);

  function handleClick() {
    userLogin(username);
  }

  return (
    <>
      <Header id="userProfile">
        <header className={styleHeader.header}>
          <Link to="/profile">
            <img
              style={{ filter: 'invert(1)' }}
              src="../assets/left-arrow.png"
              alt="Voltar"
            />
          </Link>

          {/* {data.name && (
            <p className={styles.name}>
              #{`${firstName}${lastName === firstName ? '' : `.${lastName}`}`}
            </p>
          )} */}

          <button className={styleHeader.button} onClick={handleClick}>
            Salvar
            <span className={styleHeader.icon}>
              <img src="../../assets/login.svg" alt="Salvar" />
            </span>
          </button>
        </header>
      </Header>
      {data && (
        <main>
          <div className={styles.imgContainer}>
            <img src={data.avatar_url} alt={`Foto de ${data.name}`} />
          </div>
          <section className={styles.info}>
            <h1 className={styles.name}>{data.name}</h1>
            <p className={styles.email}>{data.email}</p>
            <p className={styles.location}>{data.location}</p>
          </section>

          <section className={styles.numbersContainer}>
            <Link className={styles.followers} to="#">
              <h1>{data.followers}</h1>
              <p>Seguidores</p>
            </Link>

            <Link className={styles.following} to="#">
              <h1>{data.following}</h1>
              <p>Seguindo</p>
            </Link>

            <Link className={styles.repos} to="#">
              <h1>{data.public_repos}</h1>
              <p>Repos</p>
            </Link>
          </section>

          <section className={styles.bioContainer}>
            <h1 className={styles.bioTitle}>BIO</h1>
            <p className={styles.bio}>{data.bio}</p>
          </section>
        </main>
      )}

      <NavigationTab />
    </>
  );
}

export default UserProfile;
