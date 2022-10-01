import React, { useState } from 'react'
import './header.css'
import Web from './Web/web'
import { BsGrid } from "react-icons/bs";
import Mobile from './Mobile/mobile';

function Header() {
  const[isOpen, setIsOpen] = useState(false);
  return (
    <div className='header'>
        <div className='logo'>Personal Portfolio</div>
          <div className='menu'>
            <div className='web-menu'>
              <Web />
            </div>
            <div className='mobile-menu'>
              <div onClick={()=>setIsOpen(!isOpen)}>
                <BsGrid />
              </div>
              {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
            </div>
          </div>
    </div>
  )
}

export default Header