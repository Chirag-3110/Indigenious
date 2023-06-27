import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Account from './pages/Account';
import Bookcamp from './pages/Bookcamp';
import Gallery from './pages/Gallery';
import Home from './pages/Home';
import LiveClass from './pages/LiveClass';

function App() {

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/roboticbootcamp' element={<Bookcamp/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/liveclass' element={<LiveClass/>} />
        <Route path='/account' element={<Account/>} />
      </Routes>
    </div>
  );
}

export default App;
