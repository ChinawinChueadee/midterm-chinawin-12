import React from "react";
import { NavLink } from "react-router";
import { useUserStore } from "../stores/userStore";

function NavBar() {
  const logout = useUserStore((state) => state.logout);

  return (
    <nav className="flex justify-between p-6 bg-cyan-500">
      <div></div>

      <div className="flex gap-4">
        <NavLink
          className=" [&.active]:text-shadow-lg/90 font-extrabold text-white "
          to="/"
        >
          Login
        </NavLink>
        <NavLink
          className=" [&.active]:text-shadow-lg/90 font-extrabold text-white "
          to="/post"
        >
          Todo
        </NavLink>
        <button
          className=" [&.active]:text-shadow-lg/90 font-extrabold text-white "
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
