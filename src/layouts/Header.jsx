import HeaderImage from '../assets/img/headerImg.png';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import '../scss/Header/Header.scss';

function Header() {
	return (
		<header className='header'>
			<Navbar />
			<div className='header-content-box'>
				<div className='header-content'>
					<h1>
						We can get your Drug <br /> Prescriptions to You
					</h1>
					<p>
						We have all the drugs your doctor prescribed for your health <br /> and what’s more, we can get it to you.
					</p>
					<div className='header-button-content'>
						<Button text='Ikeja' />
						<Button text='VI' />
						<Button text='Lekki' />
						<Button text='Ajah' />
					</div>
					<div className='header-input-content'>
						<i className='bx bx-search'></i>
						<input type='text' placeholder='Seach for drugs in our store' className='header-input' id='header-input' />
						<Button text='Find drug' />
					</div>
				</div>
				<div className='header-image-content'>
					<img src={HeaderImage} alt='Header Image' className='header-image' button />
				</div>
			</div>
		</header>
	);
}

export default Header;
