import { authSubscribe, initSatellite } from "@junobuild/core";
import { useCallback, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useAuth } from "../hooks/useAuth";
import { getUserDoc, setUserDoc } from "../utils/junoUtils";
import { AuthContext } from "../contexts/authContext";

const initialAuthState = {
  user: undefined,
  userData: undefined,
  isLoading: true,
};

export const Auth = () => {
  const [auth, setAuth] = useState(initialAuthState);

  useEffect(() => {
    initSatellite({
      workers: {
        auth: true,
      },
    });
  }, []);

  useEffect(() => {
    const handleAuthChange = async (user) => {
      if (!user) {
        setAuth({ user: null, userData: null, isLoading: false });
        return;
      }

      const userDoc = await getUserDoc(user);
      setAuth({ user, userData: userDoc, isLoading: false });
    };

    const unsubscribe = authSubscribe(handleAuthChange);
    return () => unsubscribe();
  }, []);

  const updateUser = useCallback(
    async (userData) => {
      setAuth((prev) => ({ ...prev, isLoading: true }));

      const userDoc = await setUserDoc(userData, auth.userData);

      setAuth({ ...auth, userData: userDoc, isLoading: false });
    },
    [auth]
  );

  return (
    <AuthContext.Provider value={{ ...auth, updateUser }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user === undefined || user === null) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
