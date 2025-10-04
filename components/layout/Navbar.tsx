import React from 'react'


const Navbar = () => {
  return (
    <div className='fixed z-100 left-1/2 transform -translate-x-1/2 top-12 text-navbar px-6 py-3 md:px-12 md:py-6 rounded-lg bg-[#0C0E23]'>
        <ul className='flex justify-between gap-6 text-normal font-medium md:gap-8'>
            <li>About</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar