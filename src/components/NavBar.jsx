import {useEffect, useState} from 'react'
import {ThemeIcon, Burger} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Globe, CircleHelp} from 'lucide-react';

import logo from "../assets/images/logo.png";

const NavBar = () => {

	const [isMobile, setIsMobile] = useState(false);
	const [opened, {toggle}] = useDisclosure();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);
	return (
		<div
			className='mx-auto max-w-screen-2xl py-10 px-10 md:px-24 flex justify-between items-center w-full text-white text-base'>
			{/* <p className='font-semibold italic'>RW/M</p> */}
			<img src={logo} alt='logo' className='size-10'/>
			{isMobile ? (
				<Burger opened={opened} onClick={toggle} aria-label="Toggle navigation"/>
			) : (
				<>
					<div className='flex space-x-4'>
						<p>Home</p>
						<p>About</p>
						<p>Contact</p>
						<p>Support us</p>
					</div>
					<div className='space-x-2'>
						<ThemeIcon size={24} color='transparent' style={{cursor: 'pointer'}}><CircleHelp/></ThemeIcon>
						<ThemeIcon size={24} color='transparent' style={{cursor: 'pointer'}}><Globe/></ThemeIcon>
					</div>
				</>
			)}
		</div>
	);
};

export default NavBar;