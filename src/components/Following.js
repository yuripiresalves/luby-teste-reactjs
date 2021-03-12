import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../UserContext';
import Header from './Header';
import NavigationTab from './NavigationTab';

import styles from '../styles/components/Following.module.css';
import styleHeader from '../styles/components/Header.module.css';
import { Link } from 'react-router-dom';

function Following() {
  const { data } = useContext(UserContext);
  const { login, following } = data;
  const [followingList, setFollowingList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/users/${login}/following`
      );
      const json = await response.json();
      setFollowingList(json);
    }
    fetchData();
  }, [login]);

  return (
    <>
      <Header id="following">
        <header className={styleHeader.following}>
          <Link to="/profile">
            <img
              style={{ filter: 'invert(1)' }}
              src="../assets/left-arrow.png"
              alt="Voltar"
            />
          </Link>
          <p>{following} seguindo</p>
        </header>
      </Header>
      <ul>
        {followingList.map((following) => (
          <Link key={following.id} to={`/profile/${following.login}`}>
            <li className={styles.li} key={following.id}>
              <img
                className={styles.avatar}
                src={following.avatar_url}
                alt=""
              />
              <p className={styles.name}>#{following.login}</p>
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

export default Following;
