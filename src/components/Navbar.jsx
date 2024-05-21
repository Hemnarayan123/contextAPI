import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className='main-div'>

        <div className='logo'>Logo</div>

        <div className='search'>search bar</div>

        <div className='content'>
            <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
            </ul>
            <h3>Cart</h3>
            <h3>Profile</h3>
        </div>

    </div>
  )
}

export default Navbar