import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HeaderLink = ({children, ...props}) => (
  <NavLink
    exact
    className="p1 mx2 black rounded text-decoration-none"
    activeClassName="bg-white"
    {...props}
  >
    { children }
  </NavLink>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

const Header = () => {
  return (
    <header className="flex items-center justify-between px4">
      <h1 className="h1">Tong's Kitchen</h1>
      <nav>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/favorites">Favorites</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
