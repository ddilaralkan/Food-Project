import React from 'react'
import {Link} from 'react-router-dom';
import HomeImg from '../assets/homesayfa.gif'
import HomeStyle from '../styles/Home.css';

function Home() {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${HomeImg})`}}>
      <div className='order'>
        <Link to="/menu">
        <button>Sipariş Ver</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
