import React from 'react'

const NavBar = () => {
  return (
    <nav className="flex py-1">
        <ul className="flex space-x-4">
            <li><a href="#about" className="text-white hover:text-gray-200 hover:bg-blue-400 bg-blue-500 py-1 px-2 rounded-lg">About</a></li>
            <li><a href="#services" className="text-white hover:text-gray-200 hover:bg-blue-400 bg-blue-500 py-1 px-2 rounded-lg">Services</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-200 hover:bg-blue-400 bg-blue-500 py-1 px-2 rounded-lg">Contact Me</a></li>
        </ul>
    </nav>
  )
}

export default NavBar