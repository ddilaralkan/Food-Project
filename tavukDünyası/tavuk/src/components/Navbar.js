import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import Navbarcss from '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate('/');
  }

  return (
    <div className='navbar'>
        <div className='main'>
            <img src={Logo} alt="" onClick={handleLogoClick} style={{width:'200px', height:'100px', cursor:'pointer'}}/>
            <div className='mainLink'>
                <Link to='/'>Anasayfa</Link>
                <Link to='/menu' >Menü</Link>
                <Link to='/about'>Hakkımızda</Link>
                <Link to='/contact'>İletişim</Link>
            </div>
        </div>


    </div>
  )
}
