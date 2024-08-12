import React from 'react';
import {Data} from '../helpers/Data'
import MenuItem from '../components/MenuItem.js'
import MenuStyle from '../styles/Menu.css'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>TAVUKLAR</h1>
      <div className='menuList'>
        {Data.map((menuItem, key) => {
          return (
            <MenuItem
            key = {key}
            image = {menuItem.image}
            name = {menuItem.name}
            content = {menuItem.content}
            price = {menuItem.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu
