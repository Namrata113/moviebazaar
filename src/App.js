
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/homepage';
import Loginpage from './components/loginpage';
import Header from './components/common/header';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
      <Route path='/'element={<Loginpage/>}></Route>
      <Route path='/' element={<Header/>}></Route>
      </Routes>
        
    </BrowserRouter>
  );
}

export default App;
