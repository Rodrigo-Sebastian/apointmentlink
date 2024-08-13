import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/logo-header.png'

const Navbar = () => {
  return (
    <>
      <nav className='flex flex-row items-center bg-opacity-0 '>
        <div className='flex flex-row items-center mx-4 lg:mx-20'>
          <h1 className='text-xl italic text-white'>ApointLink</h1>
          <Image src={Logo} alt='Logotyp' width={80} height={100} />
        </div>
      </nav>
    </>
  )
}

export default Navbar