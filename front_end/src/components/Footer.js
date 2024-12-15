import {React} from "react"
import Logo from "../img/Logo.png";
import service from "./ServiceData/service";
export default function Footer(){
    return(
        <footer className="bg-white cursor-pointer">
            <div className="mx-auto max-w-screen-xl px-6 pb-6 pt-16 lg:px-8 lg:pt-24">
                <div className="grid lg:space-x-12 grid-cols-1 gap-12 lg:grid-cols-3">
                    <div className="grid justify-items-center">
                        <div>
                            <h2 className="flex md:hidden text-3xl font-Dancing italic tracking-wider font-bold text-yellow-400">Nice Spa</h2>
                            <img alt ="#" className="md:w-28 hidden md:flex" src={Logo} />
                        </div> 
                        <p className="mt-6 max-w-md tracking-wide leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
                            At Nice Spa, we're your refuge for unwinding and renewing. We're devoted to offering you the serenity, comfort, and elegance you rightfully deserve. 
                            By maintaining the highest standards in service and cleanliness, 
                            we encourage continuous education for our staff to guarantee your encounters with us are nothing short of exceptional.
                        </p>
                
                        <ul className="mt-8 flex justify-center gap-6 md:gap-8">
                            <li className="">
                                <a href="https://www.facebook.com/profile.php?id=61552561621667" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img alt="#icon" src="https://img.icons8.com/fluent/30/000000/facebook-new.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="mailto:dv_nailsspa@yahoo.com" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img alt="#icon" src="https://img.icons8.com/fluent/30/000000/gmail-new.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/nicespasac/" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img alt="#icon" src="https://img.icons8.com/fluent/30/000000/instagram-new.png"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.yelp.com/biz/nice-spa-sacramento-2" target="_blank" className="text-teal-700 transition hover:text-teal-700/75">
                                    <img alt="#icon" src="https://img.icons8.com/fluent/30/000000/yelp.png"/>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">About Us</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a href="/" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a  href="/Services" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a  href="/Gallery" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Staff
                                    </a>
                                </li>
                                <li>
                                    <a href="https://nice-spa-106973.square.site/" target="_blank" className="transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Booking
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Services</p> 
                            <ul className="mt-8 space-y-4 text-sm">
                                {service.map((s) => (
                                    <li>
                                        <span key={s.id} className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                            {s.servicename}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Business Hours</p>
                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Mon: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Tues: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Wed: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Thrus: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Fri: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Sat: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                                <li>
                                    <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                        Sun: 10:30 am - 9:30 pm
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <p className="text-lg font-medium text-gray-900">Contact Us</p>
                            <ul className="mt-8 md:space-y-2 space-ymailto:nguyenthuyan1706@gmail.com-5 text-sm">
                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="/">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        </svg>
                                        <a href="mailto:nicespa.square@gmail.com" className="flex-1 text-gray-700">nicespa.square@gmail.com</a>
                                    </a>
                                </li>

                                <li>
                                    <a className="flex items-center justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end" href="tel:9163337077">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 shrink-0 text-gray-900"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
      
                                        <span className="flex-1 text-gray-700">(916) 333-7077</span>
                                    </a>
                                </li>
      
                                <li className="flex items-start justify-center gap-1.5 ltr:sm:justify-start rtl:sm:justify-end">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 shrink-0 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    </svg>
                                    <a  target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/4561+Mack+Rd,+Sacramento,+CA+95823/@38.4753422,-121.4487983,17z/data=!3m1!4b1!4m6!3m5!1s0x809acf7cd6a35395:0xb2223c5c8cb0c9ca!8m2!3d38.4753422!4d-121.4487983!16s%2Fg%2F11bw3zq57f?entry=ttu" className="-mt-0.5 flex-1 not-italic text-gray-700">
                                        4561 Mack Rd Sacramento, CA 95823                                    
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
      
                <div className="mt-12 border-t border-gray-100 pt-6">
                    <div className="text-center sm:flex sm:justify-between sm:text-left">
                        <p className="text-sm text-gray-500">
                            <span className="block sm:inline">All rights reserved.</span>
                        </p>  
        
                        <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                            &copy; 2023 Nice Spa
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};