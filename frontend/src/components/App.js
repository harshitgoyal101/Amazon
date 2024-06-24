import React from 'react';
 import {Routes,Route} from 'react-router-dom';
 import Login from '../components/Login/Login'
 import Registeration from '../components/Registeration/Registeration'
import Navbar from './Navbar/Navbar';
function App() {
  return (
    <div className="App">
       <Navbar/>
        {/* <Login/> */}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Registeration' element={<Registeration/>}/>
      </Routes>
      
    </div>
  );
}

export default App;