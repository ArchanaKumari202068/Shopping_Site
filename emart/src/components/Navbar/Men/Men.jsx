import React from 'react'
import "./Men.css"
import SideNavbar from '../../sideNavbar/sideNavbar'
import Women from '../Women/Women'
const Men = () => {
  return (
    <>
        <div id='Men_page'>
           {/* <SideNavbar/> */}
           <Women men={true} />

        </div>
    </>
  )
}

export default Men