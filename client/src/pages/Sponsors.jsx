import React from 'react'
import Nav from '../components/Nav'
import DesktopNav from '../components/DesktopNav'
import TECHNOVATION from '../assets/Mobile/technovation.png'
import TECHMAHINDRA from '../assets/Mobile/techmahindra.png'
import LINE from '../assets/Mobile/Ellipse2.png'
import IMPERIAL from '../assets/Mobile/imperial.png'
import TECHNOWELL from '../assets/Mobile/technowell.png'
import CELECT from '../assets/Mobile/celect.png'
import STOCKEDGE from '../assets/Mobile/stockedge.png'
import BEECEPTOR from '../assets/Mobile/beeceptor.png'

const Sponsors = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div>
            <DesktopNav active={'sponsors'} />
            <div className=' sm:hidden'>
                <Nav active={'sponsors'} />
            </div>
        </div>
      <div className='flex justify-center items-center'>
        <div className='sm:w-1/2'>
          <div className=' flex justify-between sm:justify-center items-center mb-20 mt-4'>
            <img src={TECHNOVATION} className=' w-1/2 sm:w-2/5 px-5'/>
            <a target='_blank' className=' w-1/2 sm:w-2/5 px-5' href='https://techmahindra.com'><img src={TECHMAHINDRA}/></a>
          </div>
          <div className='justify-center items-center flex'><img src={LINE} /></div>
          <div className=' flex justify-between sm:justify-center items-center mb-12 mt-8'>
            <a target='_blank' className=' w-1/2 sm:w-2/5 px-5' href='https://imperial-overseas.com'><img src={IMPERIAL}/></a>
            <a className=' w-1/2 sm:w-2/5 px-5' href='https://teknowell.in'><img src={TECHNOWELL}/></a>
          </div>
          <div className=' flex justify-between sm:justify-center items-center mb-12'>
            <a target='_blank' className=' w-1/2 sm:w-2/5 px-5' href='https://celectedu.in'><img src={CELECT}/></a>
            <a target='_blank' className=' w-1/2 sm:w-2/5 px-5' href='https://stockedge.com'><img src={STOCKEDGE}/></a>
          </div>
          <div className=' flex justify-center items-center mb-12'>
            <a target='_blank' className=' w-1/2 sm:w-2/5 px-5' href="https://beeceptor.com"><img src={BEECEPTOR}/></a>
          </div>
          <div className='justify-center items-center flex mb-12'><img src={LINE} /></div>
        </div>
      </div>
    </div>
  )
}

export default Sponsors
