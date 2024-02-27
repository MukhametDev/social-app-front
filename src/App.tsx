import { useState } from 'react'
import Header from './Layout/Header/Header'
import SideBar from './Layout/SideBar/SideBar'
import {Routes,Route} from 'react-router-dom';
import Layout from './Layout/Layout';
import Authorization from './Pages/Authorization/Authorization';
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route path="/auth" element={<Authorization/>}/>
              <Route path="/home" element={<Home/>}/>
            </Route>
          </Routes>
    </>
  )
}

export default App
