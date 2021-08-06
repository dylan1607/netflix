import './Navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../image/netflix.svg'
import user from '../image/img-user.svg'
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons'
import { useState } from 'react'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    window.onscroll = () => {
        setIsScroll(window.pageYOffset <= 50 ? false : true);
        return () => (window.onscroll = null);
    }
    console.log(isScroll);
    return (
        <div className={isScroll ? "navbar scrolled" : "navbar"}>
            <div className="navbar__left">
                <div className="left__logo">
                    {/* <Link to='/'> */}
                        <img src={logo} alt="logo-netflix" />
                    {/* </Link> */}
                </div>
                <ul className="left__link">
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/series'>
                        <li>Series</li>
                    </Link>
                    <Link to='/movies'>
                        <li>Movies</li>
                    </Link>
                    <li>
                        My List
                    </li>
                </ul>
            </div>
            <div className="navbar__right">
                <Search className='navbar__right--icon'/>
                <span>KIDS</span>
                <Notifications className='navbar__right--icon'/>
                <img src={user} alt='img-user' />
                <div className='navbar__right--profile'>
                    <ArrowDropDown className='navbar__right--icon'/>
                    <div className='profile__options'>
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
