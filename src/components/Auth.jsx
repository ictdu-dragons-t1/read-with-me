import { authSubscribe, initSatellite } from "@junobuild/core";
import { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const Auth = () => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    (async () =>
      await initSatellite({
        workers: {
          auth: true,
        },
      }))();
  }, []);

  useEffect(() => {
    const sub = authSubscribe((user) => setUser(user));

    return () => sub();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();

  if (user === undefined || user === null) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
