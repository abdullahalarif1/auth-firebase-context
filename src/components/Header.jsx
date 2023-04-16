import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthPtovider';

const Header = () => {
  const {user, logout} = useContext(AuthContext)

  const handleLogout = () => {
    logout()
    .then(() => {

    })
    .catch((error) => {
      console.log(error.message);
    })
  }
    return (
      <div className="navbar bg-primary text-primary-content md:px-12 shadow-xl">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Auth Master
        </Link>
        <div className="ms-auto">
          <Link to="/" className="btn btn-ghost normal-case ">
            Home
          </Link>
          <Link to="/order" className="btn btn-ghost normal-case ">
            Orders
          </Link>
          <Link to="/login" className="btn btn-ghost normal-case ">
            Login
          </Link>
          <Link to="/register" className="btn btn-ghost normal-case ">
            Register
          </Link>
          {user ? (
            <>
              <span className="text-sm">{user.email}</span>
              <button
                onClick={handleLogout}
                className="btn btn-primary ms-2 border-2 border-indigo-300"
              >
                Sign out
              </button>
            </>
          ) : (
            <button className="btn btn-primary ms-2 border-2 border-indigo-300">
              Log out
            </button>
          )}
        </div>
      </div>
    );
};

export default Header;