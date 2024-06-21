// import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

const Dashboard = () => {
  const auth = useAuth();

  // if (!auth.user) {
  //   return <Navigate to="/login" />;
  // }

  return (
    <>
      <h1>Dashboard</h1>
      <p>Bienvenido {auth?.user?.username}</p>
    </>
  );
};

export { Dashboard };
