import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import logo from '../../static/images/tk_logo.png';
import classes from './Header.css';

const HeaderLink = ({children, ...props}) => (
  <NavLink
    exact
    className={classes.headerLink}
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
    <header className={classes.headerContainer}>
      <NavLink to="/home">
        <div className={classes.logo}>
          <img src={logo} alt="Logo" />
          <div className={cn(classes.logoText, classes.bold)}>Tong's{"\n"}Kitchen</div>
        </div>
      </NavLink>

      <nav>
        <HeaderLink to="/recipes">Recipes</HeaderLink>
        <HeaderLink to="/about">About</HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
