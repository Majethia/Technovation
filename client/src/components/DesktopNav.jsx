import React from 'react';
import TECHNO from '../assets/Final Assets/techno_logo.png';
import DSAII_LOGO from '../assets/Final Assets/dsaii_logo.png';
import { Link } from "react-router-dom";

function DesktopNav({ active }) {
    return (
        <nav className=' flex justify-between items-center'>
            <Link to="/"><img src={TECHNO} alt="TECHNOVATION" className=' w-28' /></Link>
            <div className=" hidden sm:block">
                <ul className=' flex justify-center items-center flex-wrap'>
                    <li><Link to="/technovation" className={active === "home" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-slate-100 border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Home</Link></li>
                    <li><Link to="/technovation/events" className={active === "events" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Events</Link></li>
                    <li><Link to="/technovation/register" className={active === "register" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Register</Link></li>
                    <li><Link to="/technovation/about" className={active === "about" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>About</Link></li>
                    <li><Link to="/technovation/contact" className={active === "contact" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Contact us</Link></li>
                </ul>
            </div>
            <Link to='/'><img src={DSAII_LOGO} alt="DSAII" className=' w-28' /></Link>
        </nav>
    )
}

export default DesktopNav;