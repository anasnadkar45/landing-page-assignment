import Image from 'next/image'
import React from 'react'
import Logo from '../../public/Logo.png'
import UserNav from './UserNav'

const Navbar = () => {
    return (
        <div className='bg-[#0d0d0d] backdrop-filter backdrop-blur-lg bg-opacity-50 z-20 py-[10px]'>
            <div className='max-w-[1080px] mx-auto flex justify-between items-center sm:px-3 md:5px'>
                <div>
                    <Image src={Logo} alt='Website Logo' width={60} height={80} />
                </div>
                <div className='hidden md:flex'>
                    <ul className='flex text-[#E4E6F2] gap-8'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Process</li>
                        <li>Work</li>
                        <li>Pricing</li>
                        <li>FAQs</li>
                    </ul>
                </div>
                <div className='hidden md:flex'>
                    <button>
                        Book a call
                    </button>
                </div>
                <div className='flex md:hidden'>
                    <UserNav />
                </div>
            </div>
        </div>
    )
}

export default Navbar