import React , {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYelp  , faFacebook , faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faAddressCard} from "@fortawesome/free-regular-svg-icons";
import Logo from "../img/Logo.png";
function SocialTree(){
    return(
        <div className="flex py-6 px-4 flex-col overflow-y-hidden overflow-x-hidden bg-bgtree bg-center w-screen h-screen bg-cover bg-no-repeat">
            <div className= "img-size mx-auto cursor-pointer">
                <img alt="#" src={Logo} className="rounded-full w-full h-full transition ease-in-out delay-150 duration-200"/>
            </div>
            <div id="Uname" className=" flex justify-center text-center">
                <span className="mx-auto my-2 md:my-3 text-[#ffae33] italic font-Dancing text-3xl md:text-5xl tracking-wider">@Nice Spa</span>
            </div>
            <div className="group md:my-7 mx-auto my-4 group hover:bg-rose-600 border-4 w-full h-16 md:w-4/5 md:h-20 rounded-full border-rose-600 shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://www.yelp.com/writeareview/biz/iXGgBvm_HxRmicDRMN5y6Q?review_origin=writeareview-search" target="_blank" rel="noreferrer">
                    <button className="w-full md:text-3xl group-hover:text-white text-rose-600 italic font-semibold h-full inline-flex items-center justify-center">
                        <FontAwesomeIcon className="mx-2 group-hover:text-white md:mx-4 overflow-hidden text-rose-500 transition ease-in-out delay-150 duration-200 text-3xl md:text-5xl" icon={faYelp}></FontAwesomeIcon>
                    Yelp</button>
                </a>
            </div>
            <div className="group mx-auto md:my-7 hover:bg-black my-4 border-4 group w-full h-16 md:w-4/5 md:h-20 rounded-full border-black shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://luxurynailwestsac.com/" target="_blank" rel="noreferrer">
                    <button className="w-full md:text-3xl italic group-hover:text-white font-semibold text-black h-full inline-flex items-center justify-center">
                        <FontAwesomeIcon className="mx-2 md:mx-4 text-4xl  group-hover:text-white md:text-5xl rounded-full shadow-md transition ease-in-out delay-150 duration-200" icon={faAddressCard}></FontAwesomeIcon>
                    Website</button>
                </a>
            </div>
            <div className="group md:my-7 mx-auto my-4 group hover:bg-red-400 border-4 w-full h-16 md:w-4/5 md:h-20 rounded-full border-red-400 shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://www.instagram.com/luxurynsws/" target="_blank" rel="noreferrer">
                    <button className="w-full h-full md:text-3xl group-hover:text-white text-red-400 font-semibold italic inline-flex items-center justify-center mx-2">
                        <FontAwesomeIcon className="mx-2 md:mx-4  text-4xl md:text-5xl group-hover:text-white text-red-400" icon={faInstagram}></FontAwesomeIcon>
                    Instagram</button>
                </a>
            </div>
            <div className="group md:my-7 mx-auto hover:bg-blue-500 group  my-4 border-4 w-full h-16 md:w-4/5 md:h-20 rounded-full border-blue-500 shadow-lg  hover:opacity-50 transition ease-in-out delay-150 duration-200">
                <a href = "https://www.facebook.com/profile.php?id=61550651454544" target="_blank" rel="noreferrer" >
                    <button className="w-full md:text-3xl group-hover:text-white text-blue-500 italic font-semibold h-full inline-flex items-center justify-center mx-2">
                        <FontAwesomeIcon className="mx-2 md:mx-4 text-4xl md:text-5xl rounded-full group-hover:text-white text-blue-500 " icon={faFacebook}></FontAwesomeIcon>
                    Facebook</button>
                </a>
            </div>
        </div>
    )
};
export default SocialTree;