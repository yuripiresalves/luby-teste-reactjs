import React, { useContext } from 'react';
import { UserContext } from '../UserContext';
import Header from './Header';

import styles from '../styles/components/Profile.module.css';
import stylesHeader from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';
import NavigationTab from './NavigationTab';
import Head from './Helper/Head';

function MyProfile() {
  let { data, userLogout } = useContext(UserContext);

  const {
    avatar_url,
    email,
    location,
    followers,
    following,
    public_repos,
    bio,
    login,
  } = data;

  let { name } = data;

  let names = ['UsuárioSemNome'];

  if (name) {
    names = name.split(' ');
  } else name = 'Usuário sem nome';

  const firstName = names[0];
  const lastName = names[names.length - 1];

  return (
    <>
      <Head title={`${login} - Meu perfil`} />
      <Header id="myProfile">
        <header className={stylesHeader.header}>
          {names && (
            <p className={stylesHeader.name}>
              #{`${firstName}${lastName === firstName ? '' : `.${lastName}`}`}
            </p>
          )}

          <button className={stylesHeader.button} onClick={userLogout}>
            Sair
            <span className={stylesHeader.icon}>
              <img src="../../assets/logout.svg" alt="Sair" />
            </span>
          </button>
        </header>
      </Header>
      <main>
        <div className={styles.imgContainer}>
          <img src={avatar_url} alt={`Foto de ${name}`} />
        </div>
        <section className={styles.info}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.email}>{email}</p>
          <p className={styles.location}>{location}</p>
        </section>

        <section className={styles.numbersContainer}>
          <Link className={styles.followers} to="/profile/followers">
            <h1>{followers}</h1>
            <p>Seguidores</p>
          </Link>

          <Link className={styles.following} to="/profile/following">
            <h1>{following}</h1>
            <p>Seguindo</p>
          </Link>

          <Link className={styles.repos} to="/profile/repos">
            <h1>{public_repos}</h1>
            <p>Repos</p>
          </Link>
        </section>

        <section className={styles.bioContainer}>
          <h1 className={styles.bioTitle}>BIO</h1>
          <p className={styles.bio}>{bio}</p>
        </section>
      </main>
      <NavigationTab />
    </>
  );
}

export default MyProfile;
