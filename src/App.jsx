import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import Feeds from'./pages/Feeds.jsx'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/' element={<Feeds/>}/>
      </Routes>
    </div>
  );
}

export default App;
