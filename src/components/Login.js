import React, { useContext, useState } from 'react';
import styles from '../styles/components/Login.module.css';
import { UserContext } from '../UserContext';
import Error from './Helper/Error';

function Login() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);

  const { userLogin } = useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!username) {
      setError('Campo obrigatório');
      const inputElement = document.querySelector('input');
      inputElement.style.boxShadow =
        '0 0 0 3px var(--background), 0 0 0 4px #EB2D2D';
      inputElement.focus();
    }

    userLogin(username);
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
        <input type="text" placeholder="Usuário" onChange={handleChange} />

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
