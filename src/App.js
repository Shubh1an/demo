

import { Routes, Route, } from 'react-router-dom';
import TabPage from './pages/TabPage';
import AdminPage from './pages/Auth/AdminPage';
import { useEffect, useState } from 'react';
import { getUser } from './utils/genericFunc';

function App() {
  
  const [toggle,setToggle]= useState(false)
  useEffect(()=>{
    let user = localStorage.getItem("credentials");
    let currentUser = {};
    
    if(user === undefined || user === null ){
      currentUser = {username: ''};
    }else{
      currentUser = JSON.parse(user);
    }
   let foundUser=getUser(currentUser?.username)
   
   localStorage.setItem("credentials",JSON.stringify(foundUser))
   setToggle(true)
  },[])
  if(!toggle) return<>Loading....</>
  return (
    <div className="App">
     
     <Routes>
      <Route path='/' element={<TabPage />}/>
      <Route path='/admin' element={<AdminPage/>}/>
     </Routes>
      
    
    </div>
  );
}

export default App;
