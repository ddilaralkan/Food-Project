import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import FooterStyle from '../styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
         <FacebookIcon/>  
         <InstagramIcon/>
      </div>

        <p>Tüm Hakları Saklıdır | TavukDünyası</p>
      
    </div>
  )
}

export default Footer


