import React from 'react';
import HERO3 from '../assets/Final Assets/hero_3.png';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className=' flex justify-center items-center h-screen'>
      <div className=' w-[20rem] sm:w-[32rem] lg:w-[44.8rem] h-[30rem] bg-slate-400/5 backdrop-filter backdrop-blur border border-slate-400/30 rounded-xl flex flex-col items-center justify-between'>
        <div className=' w-52 mt-10 flex justify-center items-center border-b border-slate-400/50'>
          <img src={HERO3} alt="" className=' w-28' />
        </div>

        <div>
        <h3 className=' font-Android_Assassin text-center text-slate-100 text-xl uppercase'>404 Error</h3>
        <p className=' font-thin font-sans text-center text-slate-300/70 mt-1'>Sorry, page not found</p>
        </div>
        <button className=' font-Android_Assassin text-center text-slate-100 bg-gradient-to-bl from-[#0054a3] to-[#0880f0] px-12 sm:px-20 py-3 rounded-lg mb-16'><Link to="/technovation">Back to home</Link></button>
      </div>
    </div>
  )
} 

export default NotFound;