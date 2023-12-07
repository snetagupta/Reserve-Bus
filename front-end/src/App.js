import React from 'react';
import {Route,Routes} from "react-router-dom"
import Home from './Pages/Home';
import BusPage from './Pages/BusPage';
import SigninPage from './Pages/SigninPage';
import SignupPage from './Pages/SignupPage';


 function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/allBuses' element={<BusPage />}/>
        <Route path='/signin' element={<SigninPage />}/>
        <Route path='/signup' element={<SignupPage />}/>
      </Routes>
    </div>
  )
}
export default App;