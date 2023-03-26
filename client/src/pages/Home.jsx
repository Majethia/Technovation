import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../components/Nav';
import DesktopNav from '../components/DesktopNav';
import HERO1 from '../assets/Final Assets/hero_1.png';

function Home() {
  return (
    <div className=' flex justify-between flex-col h-screen'>
        <DesktopNav active={'home'} />
        <div className=' sm:hidden'>
          <Nav active={'home'} />
        </div>
        <div className=' flex flex-col justify-center items-center mb-44 h-screen'>
          <div className=' flex items-center relative right-7 top-7 sm:right-48 sm:top-14'>
            <h3 className=' font-Social_Gothic_Medium text-slate-100/70 uppercase font-bold md:text-2xl'>Welcome to</h3>
            <img src={HERO1} alt="DSAII" className=' w-36 md:w-60' />
          </div>
          <h1 className=' font-Social_Gothic_Medium text-slate-100/70 font-bold text-5xl md:text-9xl uppercase'>Technovation</h1>
          <button className='sm:relative sm:left-[18.9rem] mt-7 md:mt-9 border-4 border-[#A6C7D0] py-1 rounded-2xl px-3 md:ml-8 hover:bg-slate-400/10 backdrop-filter backdrop-blur-sm'><Link to='/technovation/register' className=' font-Android_Assassin text-[#A6C7D0] text-sm'>Register</Link></button>
        </div>
    </div>
  )
}

export default Home;