import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import classes from './Layout.css';

const Layout = ({
  children,
}) => (
  <div className={classes.layoutContainer}>
    {children}
  </div>
);


Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
