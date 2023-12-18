// src/Popup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
	const AppointmentBtn = (e) => {
        e.preventDefault();
        window.open("https://nice-spa-106973.square.site/" , '_blank');
    };
    return (
		<div className={`${!isOpen? "opacity-100" : "hidden" } fixed left-0 top-0 inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10`}>
			<div className="w-full max-w-3xl overflow-y-auto sm:rounded-2xl bg-bgpop bg-center bg-cover bg-no-repeat">
				<div className='text-end'>
					<button className = " mr-5 mt-4" onClick={ () => setIsOpen(!isOpen)}>
						<FontAwesomeIcon className=' text-3xl text-white' icon={faXmark} />
					</button>
				</div>
				<div className="w-full px-4">
					<div className=" p-7 lg:space-y-6 space-y-4 md:p-24 mx-auto">
						<div className=" space-y-4 lg:space-y-6">
							<h1 className="text-center font-Monterast text-gold text-2xl md:text-4xl font-extrabold">New Year Promotion!</h1>
							<p className="text-[#FFA86D] font-Roboto font-bold text-xl uppercase md:text-4xl text-center">Get 20% off</p>
						</div>
						<div className="pb-6 font-Lora flex justify-center text-center">
							<button onClick={AppointmentBtn} className="p-2 md:p-3 md:text-2xl text-lg bg-black hover:bg-white hover:text-black  hover:-translate-y-2 border-2 border-white rounded-full text-white md:w-full w-3/4 font-semibold">Book now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Popup;
