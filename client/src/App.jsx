import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Event from './pages/Event';
import Registration from './pages/Registration';
import TechAThon from './pages/Registration/TechAThon';
import TechNova from './pages/Registration/TechNova';
import EscapeRoom from './pages/Registration/EscapeRoom';
import NerfArena from './pages/Registration/NerfArena';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import BackgroundVid from './assets/Space_Nebula_Encoded.mp4'

function App() {
  return (
    <>
    <video className='h-screen object-cover' autoPlay loop muted id="video">
      <source src={BackgroundVid} type='video/mp4'/>
    </video>
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path='/technovation/' element={<Home />} />
      <Route path='/technovation/events' element={<Event />} />
      <Route path='/technovation/contact' element={<Contact />} />
      <Route path='/technovation/about' element={<About />} />
      <Route path='/technovation/register' element={<Registration/>} />
      <Route path='/technovation/register/TechAThon' element={<TechAThon />} />
      <Route path='/technovation/register/TechNova' element={<TechNova />} />
      <Route path='/technovation/register/EscapeRoom' element={<EscapeRoom />} />
      <Route path='/technovation/register/NerfArena' element={<NerfArena/>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
