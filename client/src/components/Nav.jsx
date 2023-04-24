import React from 'react';
import { Link } from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { MdEmojiEvents } from 'react-icons/md';
import { MdOutlineAppRegistration } from 'react-icons/md';
import { AiFillContacts } from 'react-icons/ai';
import { AiFillInfoCircle } from 'react-icons/ai';
import { SiGithubsponsors } from 'react-icons/si';

function Nav({ active }) {
  return (
    <div>
      <div className='flex items-center justify-center m-4'>
        <nav className='p-4 fixed bottom-8 rounded-3xl shadow-2xl border border-gray-400  z-10 bg-slate-300/5 backdrop-filter backdrop-blur-sm'>
          <ul className='flex px-5 sm:px-8 py-1 h-12 w-fit'>
            <li className={active !== "events" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/events" className='flex flex-col items-center justify-center m-3 text-xs'><MdEmojiEvents size={20} color='white'/><p className={active === 'events' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Events</p></Link></li>
            <li className={active !== "register" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/register" className='flex flex-col items-center justify-center m-3 text-xs'><MdOutlineAppRegistration size={20} color='white'/><p className={active === 'register' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Register</p></Link></li>
            <li className={active !== "home" ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation" className='flex flex-col items-center justify-center m-3 text-xs'><AiFillHome size={20} color='white'/><p className={active === 'home' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Home</p></Link></li>
            <li className={active !== 'contact' ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/contact" className='flex flex-col items-center justify-center m-3 text-xs'><AiFillContacts size={20} color='white'/><p className={active === 'contact' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Contact</p></Link></li>
            <li className={active !== 'about' ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/about" className='flex flex-col items-center justify-center m-3 text-xs'><AiFillInfoCircle size={20} color='white'/><p className={active === 'about' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>About</p></Link></li>
            <li className={active !== 'sponsors' ? `m-2 hover:bg-sky-600 rounded-full ease-in-out duration-500` : `bg-sky-600 rounded-full ease-in-out duration-500 -translate-y-6 border-4 border-sky-700`}><Link to="/technovation/sponsors" className='flex flex-col items-center justify-center m-3 text-xs'><SiGithubsponsors size={20} color='white'/><p className={active === 'sponsors' ? ` relative top-4 uppercase font-Android_Assassin text-slate-100/95` : `hidden`}>Sponsors</p></Link></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Nav;