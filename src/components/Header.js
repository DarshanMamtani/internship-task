import React from 'react';
import './Header.css';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';

const Header = () => {
  const [{ user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <div className="headerNav">
        <h1>Deevesoft</h1>
        <div>
          <p className="headerGreet">Hello, {user ? user.email : 'User'}</p>
          <Link to={!user && '/'}>
            <button onClick={handleAuth}>{user ? 'Sign Out' : 'Sign In'}</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;