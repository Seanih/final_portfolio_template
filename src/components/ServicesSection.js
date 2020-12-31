import React from 'react';
import chess_pic from '../images/chess.svg';
import wireFrame_pic from '../images/wireframe.svg';
import virtual_pic from '../images/virtual.svg';
import mail_pic from '../images/mail.svg';
import Macbook_pic from '../images/Macbook.png';

const ServicesSection = () => {
	return (
		<div className='services'>
			<div className='services__container'>
				<h1>Services</h1>
				<div className='services__grid'>
					<div className='services__left'>
						<div className='services__content'>
							<img src={chess_pic} alt='chess piece' />
							<div className='services__desc'>
								<h2>My Process</h2>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Rerum vero dolore tenetur iure repellendus, enim eveniet minus
									facere sint ullam sapiente nam odio nostrum quaerat inventore
									incidunt excepturi beatae et.
								</p>
							</div>
						</div>
						<div className='services__content'>
							<img src={wireFrame_pic} alt='chess piece' />
							<div className='services__desc'>
								<h2>My Process</h2>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Rerum vero dolore tenetur iure repellendus, enim eveniet minus
									facere sint ullam sapiente nam odio nostrum quaerat inventore
									incidunt excepturi beatae et.
								</p>
							</div>
						</div>
						<div className='services__content'>
							<img src={virtual_pic} alt='chess piece' />
							<div className='services__desc'>
								<h2>My Process</h2>
								<p>
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Rerum vero dolore tenetur iure repellendus, enim eveniet minus
									facere sint ullam sapiente nam odio nostrum quaerat inventore
									incidunt excepturi beatae et.
								</p>
							</div>
						</div>
					</div>
					<div className='services__right'>
						<img src={Macbook_pic} alt='macbook' className='macbook' />
					</div>
				</div>
			</div>
			<div className='yellow__bar'>
				<img src={mail_pic} alt='email icon' />
				<p>Email</p>
				<span>sean.anih@gmail.com</span>
			</div>
		</div>
	);
};

export default ServicesSection;
