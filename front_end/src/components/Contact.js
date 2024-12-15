import {React , useState} from "react";
import hpic from "../img/hpic.png";
function Contact(){
    return(
        <section className="">
            <div className=" bg-bg2 bg-center bg-no-repeat bg-cover pt-56 md:pb-40 relative">
                <div className="text-center hidden md:block tracking-wide cursor-pointer text-white md:text-4xl italic  font-extrabold font-Marcok">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="text-center py-4 text-2xl block md:hidden tracking-wide cursor-pointer text-gold md:text-4xl italic uppercase font-extrabold font-Marcok">
                <span>Contact Us</span>
            </div>
            <div className=" mb-4 md:mb-12 mx-auto max-w-screen-xl cursor-pointer">
                <div className="grid grid-cols-1 text-justify md:gap-8 lg:grid-cols-3 ">
                    <div className="col-span-2 group p-4 space-y-4 lg:space-y-8">
                        <img alt="#pic" className=" ease-in-out transition-opacity duration-150 delay-150 group-hover:opacity-60" src={hpic}></img>
                    </div>
                    <div className="p-4 space-y-4 lg:space-y-8 lg:text-justify lg:grid justify-center text-center">
                        <div className="">
                            <div className="grid grid-cols-1 p-4 space-y-5">
                                <div>
                                    <span className="text-3xl tracking-wider">See us in person</span>
                                </div>
                                <div className="space-y-3">
                                    <p>We love our customers and welcome them to walk in during our normal business hours of 10:30 am - 9:30 pm, Monday through Sun.</p>
                                    <ul className="space-y-2 font-semibold">
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/4561+Mack+Rd,+Sacramento,+CA+95823/data=!4m2!3m1!1s0x809acf7cd6a35395:0xb2223c5c8cb0c9ca?sa=X&ved=2ahUKEwi8-Iny0tSBAxWYEkQIHfWTBdoQ8gF6BAgSEAA&ved=2ahUKEwi8-Iny0tSBAxWYEkQIHfWTBdoQ8gF6BAgTEAI">
                                                Address: 4561 Mack Rd Sacramento, CA 95823
                                            </a>
                                        </li>
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" href="tel:9163337077">
                                                Phone#: (916) 333-7077
                                            </a>
                                        </li>
                                   </ul>
                                </div>
                                <hr></hr>
                                <div>
                                    <div className="font-semibold text-lg">Business Hours:</div>
                                    <ul className="space-y-4 text-sm mt-4">
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
                                            <span href="" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sun: 10:30 am - 9:30 pm
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3123.5329660348434!2d-121.4487983!3d38.47534219999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809acf7cd6a35395%3A0xb2223c5c8cb0c9ca!2s4561%20Mack%20Rd%2C%20Sacramento%2C%20CA%2095823!5e0!3m2!1sen!2sus!4v1696156389780!5m2!1sen!2sus" className="w-full md:px-12" height="600" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>            
            </div>
        </section>
    )
}

export default Contact;