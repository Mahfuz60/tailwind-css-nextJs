import React from 'react';

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
     
    </div>
    <a className="btn btn-ghost normal-case text-xl">Next App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <details className='w-24'>
          <summary>Service</summary>
          <ul className="p-1 w-48">
            <li><a>Software Development</a></li>
            <li><a>FontEnd Development</a></li>
            <li><a>BackEnd Development</a></li>
            <li><a>Web Design</a></li>
            <li><a>Digital Marketing</a></li>
            <li><a>SEO</a></li>
          </ul>
        </details>
      </li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default NavBar;