import PropTypes from "prop-types";
import useAuthStore from "../stores/useAuthStore";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@mantine/core";

export const RequireAuth = ({ children }) => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!user) {
        navigate("/");
      }
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [navigate, user]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0f1433]">
        <Loader size="xl" color="#e6a33e" />
        <p className="text-white ml-4">Authenticating with Juno...</p>
      </div>
    );
  }

  return children;
};

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};
