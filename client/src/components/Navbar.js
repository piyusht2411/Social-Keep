import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';

const Navbar = () => {
  return (
    <>

      <div className='flex justify-between items-center pl-11 pr-11 pt-2.5  bg-transparent text-white '>
        <div className='img'>
        <img src = {logo} className='md:w-16'></img>

        </div>
        <ul className='flex list-none justify-evenly items-center w-80 font-bold'>
          <li>
            <NavLink className="text-white no-underline hover:underline" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="text-white no-underline hover:underline" to="/About">About</NavLink>
          </li>
          <li>
            <NavLink className="text-white no-underline hover:underline" to="/Contact">Contact</NavLink>
          </li>
          <li>
            <NavLink className="text-white no-underline hover:underline" to="/Login">Login</NavLink>
          </li>
          <li>
            <NavLink className="text-white no-underline hover:underline" to="/Signup">Signup</NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar
