import React from 'react';
import { Link } from "react-router-dom";
import { GiBolterGun } from 'react-icons/gi';
import { GiLockedDoor } from 'react-icons/gi';
import { AiOutlineCode } from 'react-icons/ai'
import { FaCodeBranch } from 'react-icons/fa';


function Nav({ active }) {
  // const [active, setActive] = useState('home');

  return (
    <div>
      <div className='flex items-center justify-center m-4'>
        <nav className='p-4 fixed bottom-8 rounded-3xl shadow-2xl border border-gray-400  z-10 bg-slate-300/5 backdrop-filter backdrop-blur-sm'>
          <ul className='flex px-5 sm:px-8 py-1 h-12 w-fit'>
            <li className={active !== "TechAThon" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : ` bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/register/TechAThon" className='flex flex-col items-center justify-center m-3 text-xs'><AiOutlineCode size={20} color='white'/><p className={active === 'TechAThon' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Tech-A-Thon</p></Link></li>
            <li className={active !== "TechNova" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : ` bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/register/TechNova" className='flex flex-col items-center justify-center m-3 text-xs'><FaCodeBranch size={20} color='white'/><p className={active === 'TechNova' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>TechNova</p></Link></li>
            <li className={active !== "EscapeRoom" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : ` bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/register/EscapeRoom" className='flex flex-col items-center justify-center m-3 text-xs'><GiLockedDoor size={20} color='white'/><p className={active === 'EscapeRoom' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Escape Room</p></Link></li>
            <li className={active !== "NerfArena" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/register/NerfArena" className='flex flex-col items-center justify-center m-3 text-xs'><GiBolterGun size={20} color='white'/><p className={active === 'NerfArena' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Nerf Arena</p></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav;