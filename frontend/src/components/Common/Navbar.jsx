import React, { useState } from 'react'
import { HiBars3BottomRight, HiOutlineShoppingBag, HiOutlineUser } from 'react-icons/hi2'

import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'
import CartDrawer from '../Layout/CartDrawer'

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    }
  return (
    <>
        <nav className='container mx-auto flex justify-between items-center py-4 px-6'>
            {/* Left Logo */}
            <div>
                <Link to='/' className='text-2xl font-medium' >
                    Rabbit
                </Link>
            </div>
            {/* Center - Navigation Links */}
            <div className="hidden md:flex space-x-6">
                <Link to='/' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Men</Link>
                <Link to='/shop' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Women</Link>
                <Link to='/about' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Top Wear</Link>
                <Link to='/contact' className='text-gray-700 hover:text-black text-sm font-medium uppercase'>Bottom Wear</Link>
            </div>
            {/* Right - Icons */}
            <div className='flex items-center space-x-4'>
                <Link className='hover:text-black'>
                    <HiOutlineUser className='h-6 w-6 text-gray-700' />
                </Link>            
                <button className='relative hover:text-black' onClick={toggleCartDrawer}>
                    <HiOutlineShoppingBag className='h-6 w-6 text-gray-700' />
                    <span className='absolute -top-1 bg-rabbit-red text-white text-xs rounded-full px-2 py-0.5'>4</span>
                </button>
                {/* Search Icon */}
                <div className='overflow-hidden'>
                    <Searchbar />
                </div>
                

                <button className='md:hidden'>
                    <HiBars3BottomRight className='h-6 w-6 text-gray-700' />
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}></CartDrawer>
    </>
  )
}

export default Navbar