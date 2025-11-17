import { useState } from 'react';
import '../scss/Navbar/Navbar.scss';
import Button from './Button';

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const handleActive = e => {
		const li = e.currentTarget;

		document.querySelectorAll('.navbar ul li').forEach(item => {
			item.classList.remove('active-blink');
		});

		li.classList.add('active-blink');
	};

	return (
		<nav className={`navbar ${isOpen ? 'open' : ''}`}>
			<h1 className='logo'>D-Express</h1>

			{/* Hamburger */}
			<div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>

			{/* Nav Links */}
			<ul>
				<li onClick={handleActive}>
					<a href='#'>Refill Prescription</a>
				</li>
				<li onClick={handleActive}>
					<a href='#'>Buy Medicine</a>
				</li>
				<li onClick={handleActive}>
					<a href='#'>Contact a pharmacist</a>
				</li>
			</ul>

			<Button text='Sign In' />
		</nav>
	);
}

export default Navbar;
