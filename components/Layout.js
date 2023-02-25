import React from 'react'
import NavBar from './NavBar'
import SideBar from './sidebar'

function Layout({children}){
    return (
        <div>
            <NavBar/>
            <SideBar/>
            {children}
        </div>
    )
}

export default Layout