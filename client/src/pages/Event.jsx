import React from 'react';
import Nav from '../components/Nav';
import DesktopNav from '../components/DesktopNav';
import HERO_2 from '../assets/Final Assets/hero_2.png';
import DomainsImage from '../assets/Domains.png'

function Event() {
  return (
    <div className=' flex flex-col justify-between h-screen'>
      <div>
        <DesktopNav active={'events'} />
        <div className=' sm:hidden'>
          <Nav active={'events'} />
        </div>
        <h1 className=' uppercase font-Android_Assassin text-slate-100/95 text-center text-2xl mb-10 sm:mt-5'>Events</h1>
        <div className=' flex justify-center items-center gap-7 mx-7 xl:ml-60 xl:mr-36 mt-5 mb-16 lg:ml-40 lg:mr-14 sm:ml-24 font-montserrat'>
          <div className='gap-9 flex flex-col text-slate-100/95 text-lg font-montserrat'>
            <div className='bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm py-10 sm:py-4 p-8 sm:px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className='uppercase text-left mb-5 font-extrabold text-xl'>TECH-A-THON</h2>
            <p className=' text-justify mb-5 text-sm md:text-xl'>
            Tech-a-thon is an exciting coding event that brings together teams from various domains. On the first day, the teams gather in their designated labs where a theme is assigned to them. They are then tasked with creating a technical project related to the theme, in the domain of their choice. At the end of the first day, the teams will present their projects to the judges. Once the evaluation is done, we  will declare the top 3 winners who will go to the Grand Finale which will be held the next day.
            </p>
            <h3 className='uppercase text-left mb-5 font-extrabold text-xl'>Rules</h3>
            <p className=' text-justify mb-5 text-sm md:text-xl'>
            1. Teams: Participants may form teams with a maximum number of members, ranging from 2 to 4. Each team must have a unique team name and designate a team leader who will serve as the main point of contact. <br /><br />
            2. Theme and Focus: The Tech-a-thon will have a specific theme or focus that all projects must align with. This theme may be related to a particular industry, social issue, or technological challenge. <br /><br />
            3. Intellectual Property: Participants must ensure that their project does not infringe on any intellectual property rights, including copyrights, trademarks, and patents. Any pre-existing code or technology used in the project must be properly licensed. <br /><br />
            4. Code of Conduct: Participants must follow a code of conduct that promotes professionalism, respect, and inclusivity. This includes guidelines related to behaviour, language, dress code, and harassment. <br /><br />
            5. Project Submission: All projects must be submitted by the designated deadline, usually in the form of a presentation or demo. Participants will also be required to submit written documentation or code. <br /><br />
            6. Judging Criteria: Projects will be judged according to specific criteria, which may include factors such as innovation, feasibility, impact, and technical skill. Judges will also consider the overall presentation and professionalism of the team. <br /><br />
            7. Disqualification: Any violation of the rules or code of conduct will result in disqualification from the competition.<br /><br />
            </p>
            </div>
            <div className='bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm px-8 py-10 sm:py-4 sm:px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className=' text-left uppercase mt-8 mb-5 font-extrabold text-xl'>TECHNOVA</h2>
            <p className=' text-justify mb-5'>
            TechNova is an event which will be conducted on the second day i.e. 25th April where individuals or teams showcase their technical skills and knowledge by presenting a project they have developed. These projects should come under the 10 domains which are mentioned in the given image that solves a problem or a process. The participants may have specific themes or requirements, such as focusing on a particular technology, addressing a particular societal or environmental issue, or fulfilling certain constraints like limited resources or time. The participants present their projects to a panel of judges who evaluate the technical quality, creativity, innovation, and impact of the project.
            </p>
            <div className='flex justify-center'>
              <img src={DomainsImage} alt="" className='h-1/2 w-1/2'/>
            </div>
            <h3 className='uppercase text-left mb-5 font-extrabold text-xl'>Rules</h3>
            <p className=' test-justify mb-5'>
            1. Projects: Participants can make teams of 2 to 4 each. Each team must submit a technical project that demonstrates creativity, innovation, and technical proficiency and must be the original work of the participants.<br/><br/>
            2. Intellectual Property: Participants must ensure that their project does not infringe on any intellectual property rights, including copyrights, trademarks, and patents. Any pre-existing code or technology used in the project must be properly licensed.<br/><br/>
            3. Code of Conduct: Participants must follow a code of conduct that promotes professionalism, respect, and inclusivity. This includes guidelines related to behaviour, language, dress code, and harassment.<br/><br/>
            4. Judging Criteria: Projects will be judged according to specific criteria, which will include factors such as innovation, feasibility, impact, and technical skill. Judges will also consider the overall presentation and professionalism of the team.<br/><br/>
            5. Disqualification: Any violation of the rules or code of conduct will result in disqualification from the competition.
            </p>
            </div>
            <div className='bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm px-8 py-10 sm:py-4 sm:px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className=' text-left uppercase mb-5 mt-8 font-extrabold text-xl'>Grand finale</h2>
            <p className=' text-justify mb-5'>
              On the second day of TechNovation, the top three groups from each event, namely the Tech-a-thon and TechNova, will be granted a common platform to compete on. During this, they will be presented with a technical challenge which they must solve within an hour. The judges will evaluate each team's performance, technical skills, innovation, creativity, and their ability to solve complex problems and declare the top three teams as the winners based on their performance and results.
            </p>
            <ul>
                <li>1. Each team consists of 2-4 members.</li>
                <li>2. Entry fee for each group is Rs. 250/-</li>
                <li>3. The top 3 projects will be awarded a cash prize as follows-
                  <br />&emsp; 1st prize- Rs. 25,000/-
                  <br />&emsp; 2nd prize-Rs. 15,000/-
                  <br />&emsp; 3rd prize-Rs. 10,000/-</li>
              </ul>
            </div>
            <h1 className=' uppercase font-Android_Assassin text-slate-100/95 text-center text-2xl mb-10 sm:mt-5'>Mini Events</h1>
            <div className='bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm px-8 py-10 sm:py-4 sm:px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h3 className=' uppercase text-left mb-5 font-extrabold text-lg'>Nerf Arena</h3>
            <p className=' text-justify mb-5'>
              The Nerf Arena event is a team-based competition that is part of the TechNovation project competition. In this event, participants form teams and compete against each other in a battle using Nerf guns. The competition takes place in an enclosed arena where teams will have to strategize and work together to eliminate their opponents while avoiding being hit themselves.
            </p>
            <p className=' text-justify mb-5'>
              The Nerf Arena event is not only a fun and exciting event but also an opportunity for participants to develop their teamwork and communication skills. The game requires participants to strategize and work together to achieve a common goal, which can help them learn how to work as part of a team effectively.
            </p>
            <h3 className='uppercase text-left mb-5 font-extrabold text-xl'>Rules</h3>
            <p className=' text-justify mb-5'>
            1. 4-10 players are allowed at once. They can form 2 teams.<br/><br/>
            2. Each slot will have a time limit of 10 minutes. <br/><br/>
            3. Objective of the game is to take the opposite team down by aiming the nerf bullets at them. Once a bullet hits you, you are out.<br/><br/>
            4. No headshots are allowed. The goal of Nerf battles is to have fun, not hurt anyone.<br/><br/>
            5. Players are not allowed to climb on obstacles.<br/><br/>
            6. Physical contact between participants is prohibited.<br/><br/>
            7. No cheating or unsportsmanlike behaviour will be tolerated.<br/><br/><br/>
            </p>
            </div>
            <div className='bg-gradient-to-r from-blue-200/20 to-blue-200/5 backdrop-filter backdrop-blur-sm px-8 py-10 sm:py-4 sm:px-14 lg:py-8 lg:px-28 rounded-2xl border border-slate-400/20 hover:bg-slate-400/5 hover:cursor-pointer'>
            <h2 className=' uppercase text-left mb-5 font-extrabold text-lg mt-8'>Escape Rooms</h2>
            <p className=' text-justify mb-5'>Escape Rooms is one of the smaller scale events that is part of the TechNovation project competition. It is a fun and challenging event where participants work together to solve a series of puzzles and riddles to escape from a themed room within a given time limit.</p>
            <p className=' text-justify mb-5'>The event takes place in a specially designed room that is set up with a theme and a storyline. The participants are briefed on the storyline and the objective of the game. The objective is to find clues and solve puzzles to unlock the room and escape before the time runs out. The puzzles and clues are related to the theme of the room, making the game more immersive.</p>
            <p className=' text-justify mb-5'>Escape Rooms is not only a fun and exciting event but also an opportunity for participants to develop their problem-solving skills and teamwork. The game requires participants to think creatively, use their imagination, and think outside the box to solve the puzzles. The event also encourages participants to work together, communicate effectively, and build trust with their teammates.
            </p>
            <h3 className='uppercase text-left mb-5 font-extrabold text-xl'>Rules</h3>
            <p className=' text-justify mb-5'>
            1. Number of players: There are 3 to 5 players per group. <br/><br/>
            2. Time limit: Escape Rooms are timed. Players must escape within the allotted time in order to win the game. <br/><br/>
            3. Rules and safety: Players are required to follow the rules and safety guidelines.  These include no climbing on furniture or props, no use of excessive force, no use of personal electronic devices, and no use of outside tools or equipment, no photography or videography allowed inside the rooms.<br/><br/>
            4. Clues and puzzles: Escape rooms are designed with a series of puzzles and clues that must be solved in order to escape. Players must use their problem-solving and critical thinking skills to decipher the clues and move forward in the game.<br/><br/>
            5. Personal belongings: Players are typically not allowed to bring personal belongings into the escape room.<br/><br/>
            6. Refunds and cancellations: Refunds and cancellations are not entertained.<br/><br/>
            7. Hints and clues: Each group can request 2 hints during the escape. However, 1 minute per Hint will be deducted from their alloted time.
            </p>
            </div>
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

export default Event;