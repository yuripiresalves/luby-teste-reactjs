import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from '../styles/components/NavigationTab.module.css';

function NavigationTab() {
  return (
    <nav className={styles.nav}>
      <div className={styles.home}>
        <NavLink to="/profile" end activeClassName={styles.active}>
          <img src="../../assets/home.svg" alt="Home" />
          Home
        </NavLink>
      </div>

      <div className={styles.repos}>
        <NavLink to="/profile/repos" activeClassName={styles.active}>
          <img src="../../assets/repos.svg" alt="Repositórios" />
          Repos
        </NavLink>
      </div>

      <div className={styles.followers}>
        <NavLink to="/profile/followers" activeClassName={styles.active}>
          <img src="../../assets/people.svg" alt="Seguidores" />
          Seguidores
        </NavLink>
      </div>

      <div className={styles.followings}>
        <NavLink to="/profile/following" activeClassName={styles.active}>
          <img src="../../assets/people.svg" alt="Seguindo" />
          Seguindo
        </NavLink>
      </div>
    </nav>
  );
}

export default NavigationTab;
