// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useAuth } from "../auth";

const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      {/* <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul> */}

      {/* Con NavLink */}
      {/* <ul>
        <li>
          <NavLink
            // className={(isActive) => ""}
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/about"
            end
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/services"
            end
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => ({
              color: isActive ? "red" : "blue",
            })}
            to="/contact"
            end
          >
            Contact
          </NavLink>
        </li>
      </ul> */}

      {/* Con NavLink y un array de objetos */}
      <ul>
        {routes.map((route) => {
          if (route.publicOnly && auth.user) return null;

          if (route.private && !auth.user) return null;

          return (
            <li key={route.to}>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "red" : "blue",
                })}
                to={route.to}
                end
              >
                {route.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const routes = [
  {
    to: "/",
    text: "Home",
    private: false,
  },
  {
    to: "/about",
    text: "About",
    private: false,
  },
  {
    to: "/blog",
    text: "Blog",
    private: false,
  },
  {
    to: "/contact",
    text: "Contact",
    private: false,
  },
  {
    to: "/login",
    text: "Login",
    publicOnly: true,
    private: false,
  },
  {
    to: "/logout",
    text: "Logout",
    private: true,
  },
  {
    to: "/dashboard",
    text: "Dashboard",
    private: true,
  },
];

export { Menu };
