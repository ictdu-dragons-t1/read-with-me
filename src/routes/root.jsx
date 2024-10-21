import { authSubscribe, initSatellite } from "@junobuild/core";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
// import seedDatabase from "../seeders/seedDatabase";

const Root = () => {
  const updateUser = useAuthStore((state) => state.updateUser);

  useEffect(() => {
    initSatellite({
      workers: {
        auth: true,
      },
    });
  }, []);

  useEffect(() => {
    const unsubscribe = authSubscribe(updateUser);
    return () => unsubscribe();
  }, [updateUser]);

  // useEffect(() => {
  //   if (import.meta.env.VITE_IS_INITIAL_SEED === "true") {
  //     seedDatabase();
  //   } 
  // }, []);

  return <Outlet />;
};

export default Root;
