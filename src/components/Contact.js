import React from 'react';
import mail from '../images/mail.svg';

const Contact = () => {
	return (
		<div className='contact'>
			<div className='contact__bar'>
				<img src={mail} alt='mail' />
				<p>Email:</p>
				<span>sean.anih@gmail.com</span>
			</div>
			<h1>Contact Me</h1>
		</div>
	);
};

export default Contact;
