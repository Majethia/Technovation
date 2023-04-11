import React from 'react';
import TECHNO from '../assets/Final Assets/techno_logo.png';
import DSAII_LOGO from '../assets/Final Assets/dsaii_logo.png';
import { Link } from "react-router-dom";


function DesktopNav({ active }) {
    console.log(active)
    return (        
            <nav className=' flex justify-between items-center'>
                <Link to="/"><img src={TECHNO} alt="TECHNOVATION" className=' w-28' /></Link>
                <div className=" hidden sm:block">
                    <ul className=' flex justify-center items-center flex-wrap'>
                        <li><Link to="/technovation/register/TechAThon" className={active === "TechAThon" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-slate-100 border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Tech-A-Thon</Link></li>
                        <li><Link to="/technovation/register/TechNova" className={active === "TechNova" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>TechNova</Link></li>
                        <li><Link to="/technovation/register/EscapeRoom" className={active === "EscapeRoom" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Escape Room</Link></li>
                        <li><Link to="/technovation/register/NerfArena" className={active === "NerfArena" ? ` mx-7 font-Android_Assassin not-italic font-normal text-base text-slate-100 hover:text-[#A6C7D0] border-b-white border-b-2 tracking-wide pb-1` : ` mx-7 font-Android_Assassin not-italic font-normal text-base text-[#A6C7D0] hover:text-slate-100 tracking-wide pb-1`}>Nerf Arena</Link></li>
                    </ul>
                </div>
                <Link to='/'><img src={DSAII_LOGO} alt="DSAII" className=' w-28' /></Link>
            </nav>
    )
}

export default DesktopNav;