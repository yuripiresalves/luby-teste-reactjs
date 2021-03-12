import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { UserContext } from '../../UserContext';

const ProtectedRoute = (props) => {
  const { isLogged } = React.useContext(UserContext);

  if (isLogged === true) return <Route {...props} />;
  else if (isLogged === false) return <Navigate to="/" />;
  else return null;
};

export default ProtectedRoute;
