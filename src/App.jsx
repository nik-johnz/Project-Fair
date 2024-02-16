import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import User from './components/User'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<User/>} />
        <Route path='/register' element={<User register/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
    </div>
  );
}

export default App;
