import React from 'react'
import NavBar from './NavBar'
import SideBar from './sidebar'
import Notify from './Notify'

function Layout({children}){
    return (
        <div>
            <NavBar/>
            <SideBar/>
            <Notify/>
            {children}
        </div>
    )
}

export default Layout