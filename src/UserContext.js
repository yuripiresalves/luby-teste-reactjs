import React, { createContext, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router';

export const UserContext = createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [isLogged, setIsLogged] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogin = useCallback(
    async function (username) {
      try {
        setError(null);
        const response = await fetch(
          `https://api.github.com/users/${username}`
        );
        if (!response.ok) {
          setError('Usuário inválido');
          return error;
        }

        const json = await response.json();
        window.localStorage.setItem('github_username', json.login);

        setIsLogged(true);
        setData(json);
        navigate('/profile');
      } catch (err) {
        setError(err);
      }
    },
    [navigate, error]
  );

  async function userLogout() {
    setData(null);
    setIsLogged(false);
    window.localStorage.removeItem('github_username');
    navigate('/');
  }

  useEffect(() => {
    async function autoLogin() {
      const username = window.localStorage.getItem('github_username');

      if (username) {
        await userLogin(username);
      } else {
        setIsLogged(false);
      }
    }
    autoLogin();
  }, [userLogin, navigate]);

  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, data, error, setError, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
};
