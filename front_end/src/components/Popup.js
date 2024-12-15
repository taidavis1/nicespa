// src/Popup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Popup1 from '../img/test.png';

const Popup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Popup1];
    const handleButtonClick = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        } else {
            setIsOpen(!isOpen);
        }
    };
	const AppointmentBtn = (e) => {
        e.preventDefault();
        window.open("https://nice-spa-106973.square.site/" , '_blank');
    };
    return (
		<div onClick={handleButtonClick} className={`${!isOpen? "opacity-100" : "hidden" } px-2 fixed left-0 top-0 inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50`}>
			<div className='relative'>
                {currentImageIndex === 2 || currentImageIndex === 3? (
                    <img alt='#popup' className='h-[680px] w-[700px] lg:w-[500px] lg:h-[800px]' src={images[currentImageIndex]} />
                ): (
                    <img  alt='#popup' className=' w-[400px] lg:w-[700px] h-[400px] lg:h-[550px]' src={images[currentImageIndex]} />
                )}
                <div className=' absolute top-0 right-0'>
                    <button className = " p-3" onClick={handleButtonClick}>
                        <FontAwesomeIcon className=' text-2xl text-orange-400' icon={faXmark} />
                    </button>
                </div>
            </div>
		</div>
    );
};

export default Popup;
