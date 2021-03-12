import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import Header from './Header';
import NavigationTab from './NavigationTab';

import styles from '../styles/components/Followers.module.css';
import styleHeader from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';

function Followers() {
  const { data } = useContext(UserContext);
  const { followers_url, followers } = data;
  const [followersList, setFollowersList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(followers_url);
      const json = await response.json();
      setFollowersList(json);
    }
    fetchData();
  }, [followers_url]);

  return (
    <>
      <Header id="followers">
        <header className={styleHeader.followers}>
          <Link to="/profile">
            <img
              style={{ filter: 'invert(1)' }}
              src="../assets/left-arrow.png"
              alt="Voltar"
            />
          </Link>
          <p>{followers} seguidores</p>
        </header>
      </Header>
      <ul>
        {followersList.map((follower) => (
          <Link key={follower.id} to={`/profile/${follower.login}`}>
            <li className={styles.li}>
              <img className={styles.avatar} src={follower.avatar_url} alt="" />
              <p className={styles.name}>#{follower.login}</p>
              <span>
                <img src="../assets/right-arrow.png" alt="Ver" />
              </span>
            </li>
          </Link>
        ))}
      </ul>
      <NavigationTab />
    </>
  );
}

export default Followers;
