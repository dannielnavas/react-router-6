import { useState } from "react";
import { useAuth } from "../auth";

const Login = () => {
  const auth = useAuth();

  const [username, setUsername] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log(username);
    auth.login({ username });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label htmlFor="">Escribe tu nombre de usuario</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
};

export { Login };
