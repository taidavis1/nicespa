import {React , useState , useEffect} from "react";
import Symbol from "../img/Symbols.png";
import Symbol22 from "../img/Symbols2.png";
import Symbol33 from "../img/Symbols3.png";
import Symbol1 from "../img/Symbols/Symbols1.png";
import Symbol2 from "../img/Symbols/Symbols2.png";
import Symbol3 from "../img/Symbols/Symbols3.png";
import Symbol4 from "../img/Symbols/Symbols4.png";
import Symbol5 from "../img/Symbols/Symbols5.png";
import Symbol6 from "../img/Symbols/Symbols6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF , faInstagram , faGoogle , faYelp} from "@fortawesome/free-brands-svg-icons";
import Popup from "./Popup";
import {Fade , Slide} from "react-awesome-reveal";
import hpic from "../img/hpic.png";

function Home(){
    const AppointmentBtn = (e) => {
        e.preventDefault();
        window.open("https://nice-spa-106973.square.site/" , '_blank');
    };

    return (
        <>
            <Popup />
            <section className="relative overflow-x-hidden">
                <div className="w-screen bg-testbg lg:bg-pageb bg-no-repeat lg:bg-center bg-cover h-screen relative">
                    <div className="absolute md:top-1/3 lg:right-12 top-44 w-full px-3 py-5 space-y-6 lg:py-8 md:space-y-8 text-center">
                        <div className="">
                            <h1 className="text-7xl ml-4 font-Dancing text-gold md:text-9xl tracking-widest whitespace-nowrap font-extrabold">Nice Spa</h1>
                        </div>
                        <div className="flex justify-center italic">
                            <ul className=" text-white font-extrabold uppercase space-y-2">
                                <li>
                                    <h2 className=" text-lg md:text-xl tracking-wide">Relaxation paves the path to tranquility</h2>
                                </li>
                                <li>
                                    <h2 className=" text-lg md:text-xl tracking-wide italic">When the body unwinds</h2>
                                </li>
                                <li>
                                    <h2 className="text-lg md:text-xl tracking-wide">the soul discovers serenity.</h2>
                                </li>
                            </ul>
                        </div>
                        <div className="flex justify-center p-4 mt-4 mb-5">
                            <button onClick={(e) => {e.preventDefault(); window.open('/SocialTree' ,'_blank')}} className="shadow-lg md:hover:bg-white md:border-2 bg-black md:bg-black/0 md:border-white md:hover:text-black hover:-translate-y-1 text-white px-12 py-5 font-Lora text-lg  md:text-xl">Leave Us A Honest Review And Get 10% off</button>
                        </div>
                        <button onClick={
                            AppointmentBtn
                        } className="hover:bg-white rounded-full md:text-xl text-white md:bg-white/0 bg-black text-lg py-3 group cursor-pointer px-12 md:border-2 md:border-white md:tracking-wide">
                            <a className = "group-hover:text-orange-400 font-extrabold">Book Appointment</a>
                        </button>
                    </div>
                </div>
                <Slide>
                    <div className="mx-auto space-y-4">
                        <div className="grid cursor-pointer grid-cols-1 lg:grid-cols-2">
                            <div className=" bg-slate-200/50 space-y-6 md:space-y-5 justify-center text-center p-5 md:p-12 lg:p-24 xl:p-44">
                                <div className = "flex flex-col space-y-4">
                                    <span className = "md:text-3xl text-2xl font-Marcok">Comfort, Elegance & Premium Quality</span>
                                    <span className = "md:text-xl text-md text-black/60 font-Marcok">ADVANCED INDIVIDUALIZED TREATMENT</span>
                                </div>
                                <div>
                                    <span className="md:text-lg">
                                        If you're in search of a spa that allows you to indulge yourself after an exhausting day at work, then The Nice Spa is your perfect haven! We are dedicated to providing 
                                        you with the most serene moments from the minute you step into our spa. Massage is a wonderful method to alleviate stress, 
                                        enhance circulation, eliminate muscle discomfort, and foster a sense of well-being & relaxation. We offer an exceptionally relaxing environment, 
                                        coupled with attentive customer service. Our skilled and seasoned therapists will attend to your individual needs and deliver the level of quality and value you anticipate from a professional 
                                        spa. We aim to ensure that you exit our spa feeling refreshed, and thoroughly pampered.
                                    </span>
                                </div>
                                <div className="">
                                    <button onClick={AppointmentBtn} className="hover:shadow-lg hover:-translate-y-2 hover:bg-black hover:text-white ease-in-out delay-100 duration-150 mt-5 md:text-xl text-black border-2 border-black text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Book Now</button>
                                </div>
                            </div>
                            <div className="hidden md:block overflow-hidden">
                                <img className="ease-in-out transition-all duration-1000 hover:scale-125" src={hpic}/>
                            </div>
                        </div>
                    
                    </div>
                </Slide>
                <Fade delay={300} duration={500}>
                    <div className=" bg-white/90 md:mb-6 lg:px-28 py-4 md:py-6 lg:py-24 relative">
                        <div className="flex justify-center lg:text-4xl">
                            <h1 className = "text-3xl mb-2 md:mb-5 font-Dancing text-black md:text-5xl">Our Exclusive Services</h1>
                        </div>
                        <div className="grid p-5 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-5 lg:gap-x-8 cursor-pointer">
                            <div className=" shadow-md shadow-black md:shadow-none md:shadow-white md:hover:shadow-lg group md:bg-white md:text-black bg-black text-white md:hover:bg-black md:hover:text-white p-6 md:p-14 space-y-5">
                                <img className=" w-20 md:invert-0 invert md:group-hover:invert" src={Symbol1} />
                                <div className="text-2xl font-Lora">
                                    <h1>Firm Swedish</h1>
                                </div>
                                <div>
                                    <span>
                                        This specialized service is a perfect blend of healing and relaxation, tailored to address your specific needs. 
                                        Whether it's muscle tightness or pain that's hindering your daily routine, 
                                        our Firm Swedish Massage offers a path to relief and rejuvenation.
                                    </span>
                                </div>
                            </div>
                            <div className=" shadow-md shadow-black md:shadow-none md:shadow-white md:hover:shadow-lg group md:bg-white md:text-black bg-black text-white md:hover:bg-black md:hover:text-white p-6 md:p-14 space-y-5">
                                <img className=" w-20 md:invert-0 invert md:group-hover:invert" src={Symbol2} />
                                <div className="text-2xl font-Lora">
                                    <h1>Hot Stone</h1>
                                </div>
                                <div>
                                    <span>
                                        This unique treatment combines the soothing strokes of a Swedish massage with the comforting heat of smooth stones, 
                                        creating a harmonious blend that truly elevates your massage experience to new heights of relaxation and therapeutic effectiveness.
                                    </span>
                                </div>
                            </div>
                            <div className=" shadow-md shadow-black md:shadow-none md:shadow-white md:hover:shadow-lg group md:bg-white md:text-black bg-black text-white md:hover:bg-black md:hover:text-white p-6 md:p-14 space-y-5">
                                <img className=" w-20 md:invert-0 invert md:group-hover:invert" src={Symbol3} />
                                <div className="text-2xl font-Lora">
                                    <h1>Rest & Relax</h1>
                                </div>
                                <div>
                                    <span>
                                        This special massage offering combines the soothing qualities of Swedish massage, the restorative warmth of hot stones, and the soothing properties of aroma oil for an unparalleled relaxation experience. The Rest and Relax Massage begins with a classic Swedish massage, where our skilled therapists apply gentle, flowing strokes to your body, easing away tension and discomfort. 
                                        This creates a peaceful rhythm that soothes the mind, setting the stage for the next step in your relaxation journey.
                                    </span>
                                </div>
                            </div>
                            <div className=" shadow-md shadow-black md:shadow-none md:shadow-white md:hover:shadow-lg group md:bg-white md:text-black bg-black text-white md:hover:bg-black md:hover:text-white p-6 md:p-14 space-y-5">
                                <img className=" w-20 md:invert-0 invert md:group-hover:invert" src={Symbol4} />
                                <div className="text-2xl font-Lora">
                                    <h1>Deep Tissue</h1>
                                </div>
                                <div>
                                    <span>
                                        Our Deep Tissue Massage is an intensive treatment focused on relieving deep-seated muscle tension and breaking down stubborn knots. Our experienced therapists employ specialized techniques that directly target problem areas, using strong, 
                                        focused pressure to penetrate deeper muscle and fascia layers.
                                    </span>
                                </div>
                            </div>
                            <div className=" shadow-md shadow-black md:shadow-none md:shadow-white md:hover:shadow-lg group md:bg-white md:text-black bg-black text-white md:hover:bg-black md:hover:text-white p-6 md:p-14 space-y-5">
                                <img className=" w-20 md:invert-0 invert md:group-hover:invert" src={Symbol5} />
                                <div className="text-2xl font-Lora">
                                    <h1>Thai Stretching & Deep Tissue</h1>
                                </div>
                                <div>
                                    <span>
                                        Thai stretching with the deep therapeutic relief of deep tissue work, forming an innovative and rejuvenating massage experience. 
                                        The session begins with expert therapists incorporating Thai stretching techniques, designed to increase your flexibility and encourage joint mobility. 
                                        Feel your body awaken as these stretches unbind tension, making way for a greater range of motion and ease of movement. This is not a traditional Thai massage.
                                    </span>
                                </div>
                            </div>
                            <div className=" shadow-md shadow-black md:shadow-none md:shadow-white md:hover:shadow-lg group md:bg-white md:text-black bg-black text-white md:hover:bg-black md:hover:text-white p-6 md:p-14 space-y-5">
                                <img className=" w-20 md:invert-0 invert md:group-hover:invert" src={Symbol6} />
                                <div className="text-2xl font-Lora">
                                    <h1>Body Scrub & Massage</h1>
                                </div>
                                <div>
                                    <span>
                                        Our scrub works to gently exfoliate, sloughing away dry, dull skin to reveal the radiant and youthful layers beneath. Enriched with Vitamin E, 
                                        this nourishing blend will leave your skin feeling supremely soft, deeply moisturized, and positively glowing.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className=" justify-center flex">
                            <button onClick={AppointmentBtn} className="hover:shadow-lg hover:-translate-y-2 hover:bg-black hover:text-white ease-in-out delay-100 duration-150 mt-5 md:text-xl text-black border-2 border-black text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Book Now</button>
                        </div>
                    </div>
                </Fade>
                <Slide>
                    <div className="text-center cursor-pointer overflow-hidden flex justify-center space-y-8 bg-bgtest bg-center bg-no-repeat bg-cover p-20 md:p-44">
                        <div className="md:p-4 lg:w-1/2 ease-in-out transition-all duration-1000 hover:scale-125">
                            <span className=" font-Lora text-xl md:text-2xl lg:text-4xl text-yellow-200 font-extrabold">
                                Transform the day you choose into a calming massage session.
                            </span>
                        </div>
                    </div>
                </Slide>
                <Fade>
                    <div className="md:p-12 mb-4 p-2 mx-auto max-w-screen-xl cursor-pointer">
                        <div className="grid grid-cols-1 lg:grid-cols-3 md:space-y-0 gap-4">
                            <div className="shadow-lg ease-in-out transition-all duration-1000 lg:hover:scale-105 rounded-lg hover: p-2 md:p-8 bg-[#26282c] space-y-3">
                                <div className="flex justify-center">
                                    <img className=" w-20 rounded-full" src={Symbol} />
                                </div>
                                <div className=" text-xl italic uppercase font-Marcok text-orange-300 text-center">
                                    <span>We boast top-tier therapists</span>
                                </div>
                                <div className=" text-white text-lg p-2 md:px-2 md:py-3 text-center">
                                    <span>
                                        At Nice Spa, we are dedicated to delivering unparalleled comfort from the moment you enter our sanctuary.
                                    </span>
                                </div>
                            </div>
                            <div className="shadow-lg  ease-in-out transition-all duration-1000 lg:hover:scale-105 rounded-lg p-2 md:p-8 bg-[#015294] space-y-3">
                                <div className=" flex justify-center">
                                    <img className=" w-20 rounded-full" src={Symbol22} />
                                </div>
                                <div className=" text-xl italic uppercase font-Marcok text-orange-300 text-center">
                                    <span>Customer ARE DELIGHTED</span>
                                </div>
                                <div className=" text-white text-lg md:py-3 text-center">
                                    <span>
                                        We only use the most respected brands in beauty, offering services, elite products, and cutting-edge technologies that meet world-class standards
                                    </span>
                                </div>
                            </div>
                            <div className="shadow-lg  ease-in-out transition-all duration-1000 lg:hover:scale-105 rounded-lg p-2 md:p-8 bg-[#838384] space-y-3">
                                <div className=" flex justify-center">
                                    <img className=" w-20 rounded-full" src={Symbol33} />
                                </div>
                                <div className=" text-xl italic uppercase font-Marcok text-orange-300 text-center">
                                    <span>We Have High Quality Service</span>
                                </div>
                                <div className=" text-white text-lg md:py-3 text-center">
                                    <span>
                                        Discover unmatched excellence with us! We take pride in providing top-notch service, guaranteeing every client
                                        exceptional care and remarkable results
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>
                <Slide>
                    <div className="text-center cursor-pointer overflow-hidden flex justify-center space-y-8 bg-bg3 bg-center bg-no-repeat bg-cover p-20 md:p-44">
                        <div className="md:p-4 lg:w-1/2">
                            <div className=" mb-5 md:mb-12">
                                <span className=" italic font-Lora text-xl capitalize md:text-4xl text-yellow-200 font-extrabold">
                                    Stay in touch With Us
                                </span>
                            </div>
                            <div className = "text-center text-2xl md:text-5xl flex-row justify-center flex space-x-6 md:space-x-12">
                                <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/nicespasac/">
                                    <FontAwesomeIcon className="text-rose-300 transition ease-in-out delay-150 duration-200"   icon={faInstagram}></FontAwesomeIcon>
                                </a>
                                <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=61552561621667">
                                    <FontAwesomeIcon className="text-sky-300 transition ease-in-out delay-150 duration-200"  icon={faFacebookF}></FontAwesomeIcon>
                                </a>
                                <a className="cursor-pointer flex" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/place/4561+Mack+Rd,+Sacramento,+CA+95823/@38.4753422,-121.4487983,17z/data=!3m1!4b1!4m6!3m5!1s0x809acf7cd6a35395:0xb2223c5c8cb0c9ca!8m2!3d38.4753422!4d-121.4487983!16s%2Fg%2F11bw3zq57f?entry=ttu">
                                    <FontAwesomeIcon className="text-green-300"  icon={faGoogle}></FontAwesomeIcon>
                                </a>
                                <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.yelp.com/biz/nice-spa-sacramento-2">
                                    <FontAwesomeIcon className="text-red-400 transition ease-in-out delay-150 duration-200"   icon={faYelp}></FontAwesomeIcon>
                                </a>
                            </div>
                        </div>
                    </div>
                </Slide>
            </section>
        </>
    );
};

export default Home;