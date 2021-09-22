import { Link, NavLink, useLocation } from 'react-router-dom';
import React from 'react';
import '../styles/header.scss';
import { useState } from 'react';

const Header = () => {
  const [dropDown, setDropOpen] = useState(false);

  const { pathname } = useLocation();

  return (
    <header className="header">
      <Link className="header__a" to="/">
        <h1 className="header__title">The Library</h1>
      </Link>
      <div className="dropdown__shown">
        <button
          className="click__dropdown"
          onClick={() => setDropOpen((prev) => !prev)}
        >
          <i className="fa fa-bars header__dropdown"></i>
        </button>

        <ul
          className={dropDown ? 'dropdown--hidden.active' : 'dropdown--hidden'}
        >
          <div className="dropdown__content">
            <li className="dropdown__link dropdown__home">
              <NavLink to="/" isActive={() => pathname === '/'}>
                Home
              </NavLink>
            </li>
            <li className="dropdown__link dropdown__bookshelf">
              <NavLink to="/bookshelf">Bookshelf</NavLink>
            </li>
            <li className="dropdown__link dropdown__addbook">
              <NavLink to="/addbook">Add Book</NavLink>
            </li>
          </div>
        </ul>
      </div>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__listitem header--home">
            <NavLink to="/" isActive={() => pathname === '/'}>
              Home
            </NavLink>
          </li>
          <li className="header__listitem header--bookshelf">
            <NavLink to="/bookshelf">Bookshelf</NavLink>
          </li>
          <li className="header__listitem header--addbook">
            <NavLink to="/addbook">Add Book</NavLink>
          </li>
        </ul>
      </nav>
      <section className="header__search header__search--styles">
        <input
          type="text"
          placeholder="Search by Title/Author"
          className="header__input"
        />
        <button type="submit" className="header__searchbtn">
          Search
        </button>
      </section>
      <script src="../index.js"></script>
    </header>
  );
};

export default Header;
