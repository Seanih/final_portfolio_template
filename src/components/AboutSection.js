import React from 'react';
import profile_pic from '../images/Profile.png';

const AboutSection = () => {
	return (
		<div className='main__section'>
			<div className='main__container'>
				<h1>Hey, I'm Sean</h1>
				<div className='main__content'>
					<div className='main__text'>
						<h2>
							A Web Developer currently living in the Atlanta metro area
						</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
							similique, dolor doloribus commodi voluptas voluptate nemo
							molestias eum eos, quis amet veritatis debitis mollitia vero?
						</p>
					</div>
					<div className='main__image'>
						<img src={profile_pic} alt='profile' className='main__img' />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
