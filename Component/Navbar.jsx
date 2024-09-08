import React from 'react';
import '/stylesheet/navbar.css';

const Navbar = ()=>{
  return (
    <>
      <div className='conatiner'>
     <ul className='navbar'>
     <li className='nav'>  Home</li>
       <li className='nav-items'> About</li>
       <li className='nav-items'> Contact</li>
       <li className='nav-items'> Courses</li>
       <li className='nav-items'> Roll No</li>
       <input placeholder='search' className='inputbox'/> 
       <button className='btn'> Search</button>
     </ul>
       
      </div>

    </>
  )
}

export default Navbar;