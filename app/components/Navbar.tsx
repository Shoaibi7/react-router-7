import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="py-4 bg-gradient-to-r from-purple-600 to-blue-500 shadow-lg">
      <div className="container mx-auto flex justify-center gap-6 md:gap-10">
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm md:text-base transition-colors duration-300 font-semibold ${
              isActive
                ? "bg-white text-purple-700"
                : "text-white hover:bg-white hover:text-purple-700"
            }`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm md:text-base transition-colors duration-300 font-semibold ${
              isActive
                ? "bg-white text-purple-700"
                : "text-white hover:bg-white hover:text-purple-700"
            }`
          }
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm md:text-base transition-colors duration-300 font-semibold ${
              isActive
                ? "bg-white text-purple-700"
                : "text-white hover:bg-white hover:text-purple-700"
            }`
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm md:text-base transition-colors duration-300 font-semibold ${
              isActive
                ? "bg-white text-purple-700"
                : "text-white hover:bg-white hover:text-purple-700"
            }`
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </nav>
  );
}
