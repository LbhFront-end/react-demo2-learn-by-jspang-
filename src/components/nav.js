
import React from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/nav.css'
const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to = "/">lbh</NavLink>|&nbsp;
            <NavLink to = "/bh1" activeClassName = "activeNav">lbh1</NavLink>|&nbsp;
            <NavLink to = "/bh2" activeClassName = "activeNav">lbh2</NavLink>|&nbsp;
            <NavLink  from = "/redirect" to="/bh1" activeClassName = "activeNav">redirect</NavLink>|&nbsp;
            <NavLink to = "/react" activeClassName = "activeNav">404</NavLink>&nbsp;
        </div>
    </div>
)
export default NavBar;