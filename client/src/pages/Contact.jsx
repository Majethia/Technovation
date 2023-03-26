import React from 'react';
import Nav from '../components/Nav';
import DesktopNav from '../components/DesktopNav';

function Contact() {
  return (
    <div className=' flex flex-col justify-between h-screen'>
      <div>
        <DesktopNav active={'contact'} />
        <div className=' sm:hidden'>
          <Nav active={'contact'} />
        </div>
        <div className=' flex justify-center items-center flex-col gap-12 sm:mt-20 mb-28'>
          <div className=' flex justify-center items-center gap-9 flex-col sm:flex-row'>
            <div className='flex gap-9 m-2 flex-col sm:flex-row'>
              <div className='sm:w-1/2 bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-4 px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
                <h2 className=' uppercase font-Android_Assassin text-left bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>
                  Zaid <br/> Rupani
                </h2>
                <h3 className=' uppercase font-Android_Assassin text-left bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-sm mb-2'>Secretary</h3>
                <p className=' uppercase font-Android_Assassin text-left bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-base'>70575 61199</p>
              </div>

              <div className='sm:w-1/2 bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-4 px-16 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
                <h2 className=' uppercase font-Android_Assassin text-left bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>
                  Bhavnish Singhall
                </h2>
                <h3 className=' uppercase font-Android_Assassin text-left bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-sm mb-2'>Communications Director</h3>
                <p className=' uppercase font-Android_Assassin text-left bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-base'>97297 32828</p>
              </div>
            </div>
          </div>
          <div>
            <div className=' flex justify-center items-center flex-col sm:flex-row bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-7 px-10 lg:py-12 lg:px-56 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
              <h2 className=' uppercase font-Android_Assassin bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'>Email us at: </h2>
              <p className=' ml-2'> <a href="mailto:dsaii.dit@dypvp.edu.in" className=' uppercase font-montserrat bg-clip-text text-transparent bg-gradient-to-r from-[#94E8E3] to-[#94E8E3] text-xl lg:text-2xl'> dsaii.dit@dypvp.edu.in</a>  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;