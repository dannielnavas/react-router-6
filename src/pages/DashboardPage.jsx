import { useAuth } from "../auth";

const Dashboard = () => {
  const auth = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <p>Bienvenido {auth?.user?.username}</p>
    </>
  );
};

export { Dashboard };
