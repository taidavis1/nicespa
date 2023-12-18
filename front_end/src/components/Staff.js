import {React} from "react";
import staffData from "./ServiceData/staffData";
function Staff(){
    const options = {
        zoom: false,
        tapAction:'close',
        doubleTapAction: false,
    }
    const AppointmentBtn = (e) => {
        e.preventDefault();
        window.open("https://nice-spa-106973.square.site/" , '_blank');
    };
    return(
        <section className = "space-y-2 md:space-y-6 pb-5 md:pb-12 ">
            <div className=" bg-hpic bg-no-repeat bg-center bg-cover pt-56 md:pt-64 md:pb-40 relative">
                <div className="tracking-wide hidden md:block text-center cursor-pointer text-white md:text-4xl italic font-Lora font-extrabold">
                    <h2 className="">Staff</h2>
                </div>
            </div>
            <div className="text-center py-2 text-2xl block md:hidden tracking-wide cursor-pointer text-gold md:text-4xl italic uppercase font-extrabold font-Marcok">
                <span>Staff</span>
            </div>
            <div className="md:space-y-12 md:p-3">
                <div className="p-4 grid grid-cols-1 gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-2xl cursor-pointer">
                    {staffData.map((s) => (
                        <div className="shadow-lg rounded-lg ease-in-out transition-all duration-1000 lg:hover:scale-105">
                            <div className="">
                                <img className="h-full w-full" src={s.img} />
                            </div>
                            <div key={s.id} className=" p-4">
                                <div>
                                    <h1 className="text-[#ffae33] font-Dancing text-3xl text-center">{s.staffname}</h1>
                                </div>
                                <div className="p-2">
                                    <span className=" p-2">{s.description}</span>
                                </div>
                                <hr></hr>
                                <div className=" mt-4 text-center">
                                    <button onClick={AppointmentBtn} className="hover:shadow-lg hover:-translate-y-2 hover:bg-black hover:text-white ease-in-out delay-100 duration-150 mt-5 md:text-xl text-black border-2 border-black text-lg py-3  group cursor-pointer px-12 md:tracking-wide">Book Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Staff;