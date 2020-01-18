import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../static/images/tk_logo.png';

const HeaderLink = ({children, ...props}) => (
  <NavLink
    exact
    className="p1 mx2 black text-decoration-none"
    activeClassName="bold"
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
      <div>
        <img src={logo} alt="Logo" />;
      </div>

      <nav>
        <HeaderLink to="/recipes">Recipes</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
