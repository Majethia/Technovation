import React from 'react'
import sponsors_img from '../assets/Sponsors.png'
import sponsors_phone from '../assets/Sponsors_Phone.png'
import Nav from '../components/Nav'
import DesktopNav from '../components/DesktopNav'

const Sponsors = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div>
            <DesktopNav active={'register'} />
            <div className=' sm:hidden'>
                <Nav active={'register'} />
            </div>
        </div>
      <img className='w-full h-screen sm:block hidden' src={sponsors_img} alt="Sponsors" />
      <img className='w-full h-screen sm:hidden' src={sponsors_phone} alt="Sponsors"/>
    </div>
  )
}

export default Sponsors
