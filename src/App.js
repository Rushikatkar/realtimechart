import './App.css';
import './login-form.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Log-in';
import Main from './components/Main';
import Register from './components/Register';

function App() {
  return (
   <>
   
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/Login' element={<Login/>} />
        <Route path='/Register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
