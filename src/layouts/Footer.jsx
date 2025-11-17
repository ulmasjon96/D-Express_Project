import '../scss/Footer/Footer.scss';

function Footer() {
	return (
		<footer className='footer'>
			<div className='newsletter'>
				<div className='left'>
					<h2>Sign up for our Newsletter</h2>
					<p>Get to know updates in the field of medicine and know how often our stores are stocked</p>
				</div>

				<div className='right'>
					<label>Your Email</label>
					<div className='input-box'>
						<input type='email' placeholder='example@email.com' />
						<button>
							Subscribe <i class='bx bxl-telegram'></i>
						</button>
					</div>
				</div>
			</div>

			<div className='footer-links'>
				<div className='column'>
					<h3 className='logo'>D-Express</h3>
					<p>Your favourite online pharmacy store. We offer onsite delivery and your health is our priority</p>
				</div>

				<div className='column'>
					<h3>Quick links</h3>
					<a href='#'>Contact us</a>
					<a href='#'>About Us</a>
					<a href='#'>Careers</a>
				</div>

				<div className='column'>
					<h3>Services</h3>
					<a href='#'>Delivery</a>
					<a href='#'>Purchase</a>
					<a href='#'>Consult Specialist</a>
				</div>

				<div className='column'>
					<h3>Social Media</h3>
					<a href='#'>Facebook</a>
					<a href='#'>Twitter</a>
					<a href='#'>LinkedIn</a>
				</div>
			</div>

			<p className='bottom-text'>Designed by sophisticateddev. copyright©</p>
		</footer>
	);
}

export default Footer;
