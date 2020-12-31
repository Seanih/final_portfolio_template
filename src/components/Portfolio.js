import React from 'react';
import portfo_img from '../images/portfolio-img.svg';
import folio1 from '../images/portfolio1.svg';
import folio2 from '../images/portfolio2.svg';
import folio3 from '../images/portfolio3.svg';

const Portfolio = () => {
	return (
		<div className='portfolio'>
			<div className='portfolio__container'>
				<h1>Portfolio</h1>
				<div className='portfolio__main'>
					<div className='portfolio__left'>
						<img src={portfo_img} alt='dashboard' className='portfolio__img' />
					</div>
					<div className='portfolio__right'>
						<h2>Web Dev Company</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur, nostrum illo! Sed dicta minima praesentium
							consectetur suscipit architecto laudantium quo autem voluptatem
							delectus quam asperiores totam, placeat ducimus vel nemo molestias
							eum accusamus. Animi, vero!
						</p>
						<a href='#'>See More</a>
					</div>
				</div>
				<div className='portfolio_projects'>
					<img src={folio1} alt='portfolio 1' />
					<img src={folio2} alt='portfolio 2' />
					<img src={folio3} alt='portfolio 3' />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
