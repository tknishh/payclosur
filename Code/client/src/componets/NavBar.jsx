import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constant';
import styles from '../style';

const activeClassName = 'active';

const NavBar = () => {
  const [active, setActive] = useState('Home');
  const [toggle, setToggle] = useState(false);

  return (
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
    <nav className="w-full flex  py-6 justify-between items-center navbar">
      <img src={logo} alt="Payclosur" className="w-[200px] h-[120px]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-40 pink__gradient" />
      <div className="absolute z-[1] w-[40%] h-[40%] rounded-full blue__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-10 blue__gradient" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 space-x-10 font-poppins font-normal cursor-pointer text-[16px] text-white : text-dimWhite">

        <li className=' text-white'>
          <NavLink to='/' activeClassName={activeClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <HashLink to='#features' activeClassName={activeClassName}>
            Features
          </HashLink>
        </li>
        <li>
          <HashLink to='#Working' activeClassName={activeClassName}>
            Working
          </HashLink>
        </li>
        <li>
          <NavLink to= '/dashboard' activeClassName={activeClassName}>
            Dashboard
            
          </NavLink>
        </li>
         
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? 'text-white' : 'text-dimWhite'
                } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavBar;
