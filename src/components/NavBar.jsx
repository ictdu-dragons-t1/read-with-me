import React from 'react'
import { ThemeIcon } from '@mantine/core';
import { Globe, CircleHelp } from 'lucide-react';

const NavBar = () => {
  return (
    <>
        <div className='mx-auto max-w-screen-2xl py-10 px-10 md:px-24 flex justify-between items-center w-full text-white text-base'>
            <p className='font-semibold italic'>RW/M</p>
            <div className='flex space-x-4'>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
                <p>Support us</p>
            </div>

            <div>
                <ThemeIcon size={24} color='transparent' style={{cursor: 'pointer'}}><CircleHelp/></ThemeIcon>
                <ThemeIcon size={24} color='transparent' style={{cursor: 'pointer'}}><Globe /></ThemeIcon>
            </div>
        </div>
    </>
  )
}

export default NavBar