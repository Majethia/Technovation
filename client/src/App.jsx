import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Event from './pages/Event';
import Registration from './pages/Registration';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path= '/' element={<Home />}/>
      <Route path='/technovation/' element={<Home />} />
      <Route path='/technovation/events' element={<Event />} />
      <Route path='/technovation/contact' element={<Contact />} />
      <Route path='/technovation/about' element={<About />} />
      <Route path='/technovation/register' element={<Registration />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
