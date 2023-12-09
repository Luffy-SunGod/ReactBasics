
import './App.css'
import {useState} from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Addtodo from './component/Addtodo';
import List from './component/List';
import Timer from './component/Timer';
import Nav2 from './component/Nav2';
import Toggle from './component/Toggle';

function App() {
  
  return (
    <>
      
      <BrowserRouter>
      <Nav2/>
        <Routes>
          <Route path="/" element={<Toggle/>}></Route>
          <Route path='/addTodo' element={<Addtodo/>}/>
          {/* <Route path='/list' element={<List/>}/> */}
          <Route path='/timer' element={<Timer/>}/>
        </Routes>

      </BrowserRouter>
      

    </>
  )
}

export default App
