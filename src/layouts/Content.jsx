import Button from '../components/Button';
import { Images } from '../components/Imgs';
import '../scss/Content/Content.scss';

function Content() {
	return (
		<main className='mainContent'>
			<section className='OurAffiliations fade-up'>
				<h1>Our Affiliations</h1>
				<div>
					<img src={Images.OurAffiliationsimg} alt='Our Affiliations' />
				</div>
			</section>

			<section className='KeyBenefits fade-up'>
				<h1>Key Benefits</h1>

				<div className='benefitCard'>
					<div>
						<h3>
							All your Medicine <br /> needs in one place
						</h3>

						<p>
							<img src={Images.Exclude} /> Search and find all kind of drugs
						</p>
						<p>
							<img src={Images.Exclude} /> We have drugs for special case treatments
						</p>
						<p>
							<img src={Images.Exclude} /> Get notified when your drug is available
						</p>

						<Button
							text={
								<>
									Get prescription <i className='bx bx-chevrons-right'></i>
								</>
							}
						/>
					</div>

					<img src={Images.group1} alt='' />
				</div>

				<div className='benefitCard reverse'>
					<img src={Images.group2} alt='' />

					<div>
						<h3>
							All your Medicine <br /> needs in one place
						</h3>

						<p>
							<img src={Images.Exclude} /> Search and find all kind of drugs
						</p>
						<p>
							<img src={Images.Exclude} /> We have drugs for special case treatments
						</p>
						<p>
							<img src={Images.Exclude} /> Get notified when your drug is available
						</p>

						<Button
							text={
								<>
									Get prescription <i className='bx bx-chevrons-right'></i>
								</>
							}
						/>
					</div>
				</div>

				<div className='benefitCard'>
					<div>
						<h3>
							All your Medicine <br /> needs in one place
						</h3>

						<p>
							<img src={Images.Exclude} /> Search and find all kind of drugs
						</p>
						<p>
							<img src={Images.Exclude} /> We have drugs for special case treatments
						</p>
						<p>
							<img src={Images.Exclude} /> Get notified when your drug is available
						</p>

						<Button
							text={
								<>
									Get prescription <i className='bx bx-chevrons-right'></i>
								</>
							}
						/>
					</div>

					<img src={Images.group3} alt='' />
				</div>
			</section>

			<section className='WhatOurClientsSay fade-up'>
				<img src={Images.WhatOurClientsSay} alt='' />

				<div className='clientText'>
					<h1>What Our Clients Say</h1>

					<p>
						“The ease of delivery is one that I depended <br />
						on when I was bedridden and couldn’t even <br />
						walk. Their services are awesome”
					</p>

					<p className='authorName'>– Gerald Maldiliene</p>

					<div className='spans-radio'>
						<span className='radio active'></span>
						<span className='radio'></span>
						<span className='radio'></span>
						<span className='radio'></span>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Content;
