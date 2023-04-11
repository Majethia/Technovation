import React, { useState } from 'react';
import axios from 'axios';
import { BiArrowBack } from "react-icons/bi";
import { Link } from 'react-router-dom';
import QRCODE from '../../assets/Final Assets/qr_code.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RegisterNav from '../../components/RegisterNav';
import RegisterNavPhone from '../../components/RegisterNavPhone';

function TechAThon() {
  const showToastSuccess = (message) => {
    toast.success(message, {
        position: toast.POSITION.TOP_RIGHT
    });
  };

  const showToastError = (message) => {
    toast.error(message, {
        position: toast.POSITION.TOP_RIGHT
    });
  };


  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
	const [teamName, setTeamName] = useState('');
	const [leader, setLeader] = useState('');
	const [leaderNumber, setLeaderNumber] = useState('');
	const [leaderEmail, setLeaderEmail] = useState('');



  const handleSubmit = (event) => {
		event.preventDefault();
    
    if (
      selectedFile === null || 
      teamName === '' || 
      leader === '' || 
      leaderNumber === '' || 
      leaderEmail === ''
    ) {
      showToastError('Please Fill All Details');
      return;
    }

    const formData = new FormData();
    
    formData.append('image', selectedFile);
    formData.append("teamName", teamName);
    formData.append('leader', leader);
    formData.append('leaderNumber', leaderNumber);
    formData.append('leaderEmail', leaderEmail);


    setLoading(true);
    axios.post('http://localhost:8000/api/register_techathon/', formData, { headers: { 'content-type': 'multipart/form-data' }})
      .then(response => {
        console.log(response.data)
        if (response.data.Response === 'OK'){
          showToastSuccess('Registration Successful!!');
        } else {
          showToastError('Error Registration Failed');
        }
      })
      .catch((error) => {
        showToastError('Error Registration Failed');

      });
    setLoading(false);
  }
  
  return (
    <div className=' flex flex-col justify-between h-screen'>
      <RegisterNav active={'TechAThon'} />
      <div className=' sm:hidden'>
          <RegisterNavPhone active={'TechAThon'} />
      </div>
      <div className=' mx-10 my-5 flex justify-end'>
        <Link to="/technovation" className=' flex justify-end items-center'><BiArrowBack className=' mr-2 text-slate-100' size={24} /> <span className=' uppercase text-right font-Android_Assassin text-base text-slate-100'>Back to home</span></Link>
      </div>
      <h1 className=' uppercase font-Android_Assassin text-slate-100/95 text-center text-2xl sm:mt-5'>Tech-A-Thon</h1>
      <div className='flex items-center justify-center h-fit'>
        <div className='flex flex-col justify-center items-center gap-0 md:flex-row sm:w-[35rem] bg-slate-400/10 backdrop-filter backdrop-blur border border-slate-400/20 rounded-xl h-fit my-10 sm:mx-0 w-[22rem]'>
          <div className=' sm:w-fit p-14 sm:p-0 flex justify-center items-center'>
            <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col sm:inline-block">
              <div className="mb-5 mt-10">
                <p className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase">Please read the rules before registering.
                <Link to='/technovation/events' className='block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase underline text-blue-600 hover:text-blue-800 visited:text-purple-600'>Click Here to read rules</Link>
                <br/>
                </p>

              </div>
              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase">Team name</label>
                <input autoComplete='off' type="text" className=" bg-slate-800/30 border border-slate-400/20 p-3 rounded-lg focus:outline-none focus:ring focus:ring-slate-400/30 w-80 md:w-full focus:bg-slate-800/30 text-slate-100 text-base" onChange={e => setTeamName(e.target.value)} placeholder='Team name'/>
              </div>

              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase">Team lead name</label>
                <input autoComplete='off' type="text" className=" bg-slate-800/30 border border-slate-400/20 p-3 rounded-lg focus:outline-none focus:ring focus:ring-slate-400/30 w-80 md:w-full focus:bg-slate-800/30 text-slate-100 text-base" onChange={e => setLeader(e.target.value)} placeholder='Team lead name'/>
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase" >Leader Email address</label>
                <input autoComplete='off' type="email" className=" bg-slate-800/30 border border-slate-400/20 p-3 rounded-lg focus:outline-none focus:ring focus:ring-slate-400/30 w-80 md:w-full focus:bg-slate-800/30 text-slate-100 text-base" onChange={e => setLeaderEmail(e.target.value)} placeholder='Leader Email address'/>
              </div>

              <div className="mb-5">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase">Leader Contact no.</label>
                <input autoComplete='off' type="text" className=" bg-slate-800/30 border border-slate-400/20 p-3 rounded-lg focus:outline-none focus:ring focus:ring-slate-400/30 w-80 md:w-full focus:bg-slate-800/30 text-slate-100 text-base" onChange={e => setLeaderNumber(e.target.value)} placeholder='Contact No.'/>
              </div>

              <div className=' flex justify-center items-center flex-col mt-10 mb-7'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase">QR Code For Payment</label>
                <img src={QRCODE} alt="" className=' w-60' />
                <p className=' font-Android_Assassin text-base text-slate-200 mt-2'>Please pay 250</p>
              </div>

              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-100 font-Android_Assassin uppercase">Payment Screenshot</label>
                <div className=' bg-slate-400/20 px-5 py-4 rounded-md w-80'>
                  <input type="file" id="image" onChange={e => setSelectedFile(e.target.files[0])}/>
                </div>
              </div>
              <button type="submit" className=" drop-shadow-xl shadow-violet-700/50 mt-10 mb-16 text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium text-sm px-5 py-2.5 text-center  dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-80 rounded-lg md:w-full md:py-3">
                {!loading && <>Register</>}
                {loading && (
                  <div className="flex justify-center items-center">
                    <div role="status">
                      <svg aria-hidden="true" className="mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-spice_red" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                      </svg>
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default TechAThon;