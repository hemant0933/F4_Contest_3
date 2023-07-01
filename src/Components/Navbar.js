import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav_wrapper'>
      <div className='navleft'>Shopping Cart</div>
      <div className='navright'>
        <Link to="/">Home Page</Link>
        <Link to="/cartpage">Cart Page</Link>
      </div>
    </div>
  );
}

export default Navbar;
