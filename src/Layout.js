import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Components/style.module.css'

const Layout = ({ children }) => {
  return (
    
    <div className={classes.layout}>
      <nav className={classes.nav}>
        <Link className={classes.navlink} to="/">Poke library</Link>
      </nav>
      <div>
      {children}
      </div>
    </div>
  );
}

export default Layout;