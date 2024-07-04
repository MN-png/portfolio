import React from 'react';
import logo from '../assets/logo.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className='mb-10 flex items-center justify-between py-2'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" width={50}/>
        </div>
        <div className='mt-1 flex items-center justify-center gap-4 text-2xl'>
        <FaInstagram/>
        <FaSnapchat/>
        <FaWhatsapp/>
        </div>
        
    </nav>
  )
}

export default Navbar