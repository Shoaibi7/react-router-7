import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="p-4 bg-gray-100 shadow-md flex gap-4">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-500"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-500"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : "text-gray-500"
        }
        to="/contact"
      >
        Contact
      </NavLink>
    </nav>
  );
}
