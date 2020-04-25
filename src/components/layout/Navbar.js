import React from 'react'
import {Link} from 'react-router-dom'
import SingnedInLinks from './SingedInLinks'
import SingnedOutLinks from './SingedOutLinks'


const Navbar = () =>{
    return(
        <nav class="nav-wrapper grey darken-3" >
            <div className="container" >
                <Link to='/' className='brand-logo'>Planner</Link>
                <SingnedInLinks/>
                <SingnedOutLinks/>
            </div>
        </nav>
    )
}

export default Navbar