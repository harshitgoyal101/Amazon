import React from 'react'
import './Navbar.css' 

const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>Welcome!</h2>
        <ul className='navbar-menu'>
            <a href='/login'>Sign in</a>
            <a href ='/Registeration'>Sign up</a>
        </ul>

    </div>
  )
}

export default Navbar
