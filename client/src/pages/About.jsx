import React from 'react';
import Nav from '../components/Nav';
import DesktopNav from '../components/DesktopNav';
import HERO_2 from '../assets/Final Assets/hero_2.png';

function About() {
  return (
    <div className=' flex flex-col justify-between h-screen'>
      <div>
        <DesktopNav active={'about'} />
        <div className=' sm:hidden'>
          <Nav active={'about'} />
        </div>
        <h1 className=' uppercase font-Android_Assassin text-slate-100/95 text-center text-2xl mb-10 sm:mt-5'>About us</h1>
        <div className=' flex justify-center items-center gap-7 mx-7 xl:ml-60 xl:mr-36 mt-5 mb-16 lg:ml-40 lg:mr-14 sm:ml-24'>
          <div className='bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-14 px-8 sm:px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer flex justify-center items-center flex-col text-slate-100/95 text-xl font-montserrat '>
            <p className=' text-justify mb-5 break-all'>
              TechNovation is a highly anticipated and prestigious project competition that is set to be launched in the year 2023 by the DSAII Club. The main objective of this event is to bring together engineering students from all over the country and provide them with an opportunity to showcase their skills and compete against each other in their respective domains. This event is a platform that aims to celebrate and encourage innovation and creativity among young engineers.
            </p>
            <p className=' text-justify mb-5 break-all'>
              The competition comprises of two major events- Tech-a-thon and TechNova. Tech-a-thon is a CodeJam where participants will be given a specific coding challenge to solve within a given time limit. The second event, TechNova, is a technical project competition where students will have to create and present their technical projects. In addition to the two major events, there will be two smaller scale events - Escape Rooms and Nerf Arena.
            </p>
            <p className=' text-justify mb-5 break-all'>
              TechNovation is a testament to the importance of innovation and creativity in engineering, and it serves as a reminder of the critical role that engineering plays in shaping the world we live in. The competition is an excellent opportunity for students to demonstrate their potential and hone their skills. It will encourage participants to think outside the box and come up with innovative solutions to real-world problems. With its focus on innovation and creativity, TechNovation promises to be a game-changer in the engineering world, inspiring the next generation of tech leaders and entrepreneurs.
            </p>
          </div>
          <div className=' hidden sm:block'>
            <img src={HERO_2} alt="" className=' w-[36rem]' />
            <img src={HERO_2} alt="" className=' -rotate-180 -translate-x-2 w-96 opacity-20 -translate-y-1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;