import {React , useState} from "react";
import {Fade , Slide} from "react-awesome-reveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faXmark , faPlus} from "@fortawesome/free-solid-svg-icons";
import hpic from "../img/hpic.png";
import service from "./ServiceData/service";
function Services(){
    const AppointmentBtn = (e) => {
        e.preventDefault();
        window.open("https://nice-spa-106973.square.site/" , '_blank');
    };
    const [IsClick , setIsClick] = useState(false);
    const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
    };

    return (
        <section className=" bg-white overflow-hidden">
            <div className="pt-56 bg-bg4 bg-center bg-no-repeat bg-cover md:pb-40 relative">
                <div className="tracking-wide hidden md:block text-center cursor-pointer text-white md:text-4xl italic font-Lora font-extrabold">
                    <h2>Our Services</h2>
                </div>
            </div>
            <div className="text-center py-4 text-2xl block md:hidden tracking-wide cursor-pointer text-gold md:text-4xl italic uppercase font-extrabold font-Marcok">
                <h2>Our Services</h2>
            </div>

            {/* Mobile View */}
            <div className=" px-5 space-y-5 md:hidden">
                {service.map((s) => (
                    <div className="grid grid-cols-1 overflow-auto">
                        <div className="">
                            <button className="w-full py-3 shadow-lg border-2 border-[#ffae33] text-black rounded-xl font-semibold tracking-wide text-center" key={s.id} onClick={() => handleBtn(s.id)}>
                                <div className="grid grid-cols-3">
                                    <div className="col-span-2 text-lg font-Lora italic tracking-wider">{s.servicename}</div>
                                        <div>
                                            {!IsClick[s.id]?
                                                <FontAwesomeIcon className=" text-[#ffae33]" icon={faPlus} />: <FontAwesomeIcon className="text-[#ffae33]" icon={faXmark} />
                                            }
                                        </div>
                                </div>
                            </button>
                            {IsClick[s.id] && (
                                <div className="">
                                    <Fade delay={100}>
                                        <div className="p-4 shadow-lg rounded-lg">
                                            <div className="grid p-3 grid-cols-1">
                                                <img src= {s.img} />
                                            </div>
                                            <ul className=" ml-4 p-2 space-y-3 list-inside gap-4">
                                                <div className="">
                                                    <li className=" text-lg">{s.description}</li>
                                                </div>
                                                <div className=" text-center">
                                                    <li className=" text-xl text-[#ffae33]">{s.Price}</li>
                                                </div>
                                            </ul>
                                        </div>
                                    </Fade>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <div className=" flex justify-center">
                    <button onClick={AppointmentBtn} className="hover:shadow-lg hover:-translate-y-2 hover:bg-black hover:text-white ease-in-out delay-100 duration-150 mt-5 md:text-xl text-black border-2 border-black text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Book Now</button>
                </div>
            </div>



            <div className="md:space-y-12 p-3 hidden md:block">
                <div className="p-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-2xl cursor-pointer">
                    {service.map((s) => (
                        <div className="shadow-lg rounded-lg space-y-2 mb-2 py-4 ease-in-out transition-all duration-1000 lg:hover:scale-105">
                            <div className=" p-4">
                                <img className="h-full w-full" src={s.img} />
                            </div>
                            <div key={s.id} className=" p-4">
                                <div>
                                    <h1 className="text-[#ffae33] font-Dancing text-3xl text-center">{s.servicename}</h1>
                                </div>
                                <div className="p-2">
                                    <span className=" p-2">{s.description}</span>
                                </div>
                                <hr></hr>
                                <div className=" mt-4 text-center">
                                    <span className=" font-Lora text-2xl">{s.Price}</span>
                                </div>
                             </div>
                            <div className=" flex justify-center">
                                <button onClick={AppointmentBtn} className="hover:shadow-lg hover:-translate-y-2 hover:bg-black hover:text-white ease-in-out delay-100 duration-150 mt-5 md:text-xl text-black border-2 border-black text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Book Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;