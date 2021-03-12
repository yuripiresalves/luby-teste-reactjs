import React, { useContext, useState } from 'react';
import styles from '../styles/components/Login.module.css';
import { UserContext } from '../UserContext';
import Error from './Helper/Error';

function Login() {
  const [username, setUsername] = useState('');

  const { userLogin, error, setError } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    userLogin(username);
    setUsername('');
  }

  function handleChange({ target }) {
    setError(null);
    setUsername(target.value);
    const inputElement = document.querySelector('input');
    inputElement.style = 'initial';
  }

  return (
    <main className={styles.container}>
      <header className={styles.imgContainer}>
        <img src="./assets/github-logo.png" alt="Github Logo" />
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={handleChange}
        />

        {error && <Error error={error} />}

        <button>
          ENTRAR{' '}
          <span>
            <img src="./assets/right-arrow.png" alt="Seta para direita" />
          </span>{' '}
        </button>
      </form>
    </main>
  );
}

export default Login;
