import React from 'react'
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className='bg-blue-700 pt-2 pl-3 flex flex-col items-start'>
      <h1 className="text-white text-3xl font-bold border-green-500">School Academy Institute Student Manager</h1>
      <NavBar />
    </header>
  );
};

export default Header