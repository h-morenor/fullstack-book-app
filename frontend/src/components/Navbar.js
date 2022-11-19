import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Auth } from "../contexts/Auth";
import { useLogout } from "../hooks/useLogout";

export default function Navbar() {
  const { user } = useContext(Auth);
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="flex justify-between px-14 py-4 items-center border bottom-1">
      <div className="text-3xl">
        <NavLink to="/">Booksy</NavLink>
      </div>
      {user && (
        <div>
          <p>{user.email}</p>
        </div>
      )}
      <div className="flex gap-2 items-center">
        {user && (
          <button
            onClick={handleLogout}
            className="p-2 border border-red-400 rounded-md"
          >
            Logout
          </button>
        )}
        {!user && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
