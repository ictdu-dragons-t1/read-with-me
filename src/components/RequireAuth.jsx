import PropTypes from "prop-types";
import useAuthStore from "../stores/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RequireAuth = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!user) {
        navigate("/");
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [navigate, user]);

  if (!user) {
    return null;
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
