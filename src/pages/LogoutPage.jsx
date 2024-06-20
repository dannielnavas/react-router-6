import { useAuth } from "../auth";

const Logout = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    console.log("logout");
    auth.logout();
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={logout}>
        <label htmlFor="">Seguro que quieres salir ? </label>

        <button type="submit">Salir</button>
      </form>
    </>
  );
};

export { Logout };
