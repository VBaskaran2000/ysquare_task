import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Registration } from './component/Reg_page/Reg_page';
import { Login } from './component/Login_page/Login';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import {  Dashboard } from './component/dashboard/dashboard';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>


    <Route path='/' element={[<Registration/>]}/>
    <Route path='/Login' element={[<Login/>]}/>
    <Route path='/Dashboard/:s_no' element={[<Dashboard/>]}/>


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
