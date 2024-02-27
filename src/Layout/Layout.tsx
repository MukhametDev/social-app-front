import React from 'react'
import { Outlet } from '../../node_modules/react-router-dom/dist/index'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'

const Layout = () => {
  return (
   <>
    <Header/>
    <main>
        <SideBar/>
        <Outlet/>
    </main>
   </>
  )
}

export default Layout