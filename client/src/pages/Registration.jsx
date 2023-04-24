import React from 'react';
import Nav from '../components/Nav';
// import  { useNavigate } from 'react-router-dom'
import DesktopNav from '../components/DesktopNav';


function Registration() {
  // const navigate = useNavigate();

  // const formSelect = (form) => {
  //   navigate(`/technovation/register/${form}`)
  // }

  return (
    <>
      <DesktopNav active={'register'} />
      <div className=' sm:hidden'>
        <Nav active={'register'} />
      </div>
      <div className='flex flex-col h-screen'>
        <h1 className=' uppercase font-Android_Assassin text-slate-100/95 text-center text-2xl mb-10 sm:mt-5'>Registrations Are Now Closed.</h1>
    
        {/* <div className=' justify-center items-center h-1/2 grid sm:grid-cols-2 grid-cols-1 sm:gap-16 gap-8 ml-10 sm:ml-48 mr-10 sm:mr-48 mt-12 mb-12 '>
          <div onClick={() => formSelect('TechNova')} className=' bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-6 px-4 lg:py-16 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className='whitespace-nowrap uppercase font-Android_Assassin text-center bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>
              TechNova
            </h2>
          </div>


          <div onClick={() => formSelect('TechAThon')} className=' bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-6 px-4 lg:py-16 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className='whitespace-nowrap uppercase font-Android_Assassin text-center bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>
              Tech-A-Thon
            </h2>
          </div>

          <div onClick={() => formSelect('EscapeRoom')} className=' bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-6 px-4 lg:py-16 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className='whitespace-nowrap uppercase font-Android_Assassin text-center bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>
              Escape Room
            </h2>
          </div>

          <div onClick={() => formSelect('NerfArena')} className=' bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-6 px-4 lg:py-16 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className='whitespace-nowrap uppercase font-Android_Assassin text-center bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>
              Nerf Arena
            </h2>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Registration;