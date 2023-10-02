import {React , useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
function FloatBtn(){
    const [isThere , SetisThere] = useState(false)
    const changeisThere = () =>{
        if (window.pageYOffset > 300){
            SetisThere(true)
        }
        else{
            SetisThere(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }

    useEffect(() => {
        window.addEventListener('scroll' , changeisThere)
        return () => {
            window.removeEventListener('scroll' , changeisThere)
        }
    } , [])

    return (
        <div>
            <div className= {`${isThere?"opacity-100": "opacity-0"}  fixed bottom-4 z-10 right-2  rounded-full p-2 animate-bounce  border-2 shadow-lg bg-gradient-to-r from-rose-100 to-teal-100`}>
                <button className="cursor-pointer" type="button" onClick={scrollTop}>
                    <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
            {/* <div className= {`${isThere?"opacity-100": "opacity-0"} font-bold text-md md:text-xl font-Lora text-black fixed bottom-28 z-10 right-1 md:right-4 rounded-full p-4 shadow-lg bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500`}>
                <button className="cursor-pointer italic" type="button" onClick={scrollTop}>
                    Book Now
                </button>
            </div> */}
        </div>
    );
};

export default FloatBtn;