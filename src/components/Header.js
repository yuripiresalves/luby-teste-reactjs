import React from 'react';

import styles from '../styles/components/Header.module.css';

function Header({ children, id }) {
  if (id === 'myProfile')
    return <section className={styles.myProfile}>{children}</section>;
  if (id === 'userProfile')
    return <section className={styles.userProfile}>{children}</section>;
  if (id === 'repos')
    return <section className={styles.repos}>{children}</section>;
  if (id === 'followers')
    return <section className={styles.followers}>{children}</section>;
  if (id === 'following')
    return <section className={styles.following}>{children}</section>;
  else return null;
}

export default Header;
