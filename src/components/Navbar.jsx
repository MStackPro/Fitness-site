import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import {links} from '../data'
import './navbar.css'
import Logo from '../images/logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);

  return (
    <nav>
        <div className="container nav-container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="nav logo" />
            </Link>
            <ul className={`nav-links ${isNavShowing ? 'show-nav' : 'hide-nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className='nav-toggle-btn' onClick={() => setIsNavShowing(prev => !prev)} >
                {
                    isNavShowing ? <MdOutlineClose/> : <FaBarsStaggered/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar