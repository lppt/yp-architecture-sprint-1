import React from 'utils/react';
import { Route, Redirect } from "utils/react-router-dom";

const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route exact>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;