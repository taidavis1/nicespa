// src/Popup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
		<div className={`${!isOpen? "opacity-100" : "hidden" } fixed left-0 top-0 inset-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10`}>
			<div className="w-full max-w-3xl overflow-y-auto sm:rounded-2xl bg-bgpop bg-center bg-cover bg-no-repeat">
				<div className='text-end'>
					<button className = " mr-5 mt-4" onClick={ () => setIsOpen(!isOpen)}>
						<FontAwesomeIcon className=' text-3xl text-red-400' icon={faXmark} />
					</button>
				</div>
				<div className="w-full px-4">
					<div className=" p-7 md:p-24 mx-auto">
						<div className="mb-8">
							<h1 className="mb-4  text-center text-gold text-2xl md:text-4xl font-extrabold">Grand Opening Promotion!</h1>
							<p className="text-white font-bold text-xl md:text-3xl text-center">Get $40 off </p>
						</div>
						<div className="space-y-6 font-Lora">
							<button className="p-3 text-xl bg-black hover:bg-white hover:text-black hover:-translate-y-2 border-2 border-white rounded-full text-white w-full font-semibold">Book now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Popup;
