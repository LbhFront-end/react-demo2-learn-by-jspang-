import React from 'react'
import {NavLink} from 'react-router-dom'
const NavBar = () =>(
    <div>
        <div>
            <NavLink exact to = "/">lbh</NavLink>
            <NavLink to = "/bh1">lbh1</NavLink>
            <NavLink to = "/bh2">lbh2</NavLink>
        </div>
    </div>
)
export default NavBar;