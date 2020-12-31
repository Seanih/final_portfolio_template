import React from 'react';
import brain_pic from '../images/ai-brain.svg';

const HeroSection = () => {
	return (
		<div className='hero__section'>
			<div className='hero__wrapper'>
				<div className='column__left'>
					<span>01 - Sean Anih</span>
					<h1>
						Web Developer /
						<br />
						Programmer
					</h1>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil
						vero non cumque veniam culpa sunt libero illum optio dolore!
					</p>
				</div>
				<div className='column__right'>
					<img src={brain_pic} alt='brain' className='hero__img' />
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
