import React from 'react'


const Navbar = () => {
  return (
    <div className='fixed top-12 w-full max-w-[461px] text-navbar px-12 py-6 rounded-lg bg-[#0C0E23]'>
        <ul className='flex justify-between gap-8 text-normal font-medium'>
            <li>About</li>
            <li>Projects</li>
            <li>Testimonials</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar