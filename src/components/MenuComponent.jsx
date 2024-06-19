// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Menu = () => {
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
        {routes.map((route) => (
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
        ))}
      </ul>
    </nav>
  );
};

const routes = [
  {
    to: "/",
    text: "Home",
  },
  {
    to: "/about",
    text: "About",
  },
  {
    to: "/blog",
    text: "Blog",
  },
  {
    to: "/contact",
    text: "Contact",
  },
];

export { Menu };
